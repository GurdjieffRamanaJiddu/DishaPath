import { NextResponse } from "next/server";
import { getAdminAuth, getAdminDb } from "@/lib/firebase/admin";
import {
  generateLoginCode,
  generatePin,
  hashPin,
} from "@/lib/crypto";
import { GRADES, type Grade, type Locale } from "@/lib/types";

async function uniqueLoginCode(): Promise<string> {
  const adminDb = getAdminDb();
  for (let i = 0; i < 10; i++) {
    const code = generateLoginCode();
    const existing = await adminDb
      .collection("students")
      .where("loginCode", "==", code)
      .limit(1)
      .get();
    if (existing.empty) return code;
  }
  throw new Error("Could not generate a unique login code");
}

export async function POST(req: Request) {
  // Authenticate the parent from their Firebase ID token.
  const authHeader = req.headers.get("authorization") ?? "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  if (!idToken) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }

  let parentUid: string;
  try {
    const decoded = await getAdminAuth().verifyIdToken(idToken);
    parentUid = decoded.uid;
  } catch {
    return NextResponse.json({ error: "invalid token" }, { status: 401 });
  }

  const adminDb = getAdminDb();

  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const grade = Number(body?.grade) as Grade;
  const language = body?.language as Locale;

  if (!name || name.length > 40) {
    return NextResponse.json({ error: "invalid name" }, { status: 400 });
  }
  if (!GRADES.includes(grade)) {
    return NextResponse.json({ error: "invalid grade" }, { status: 400 });
  }
  if (language !== "en" && language !== "hi") {
    return NextResponse.json({ error: "invalid language" }, { status: 400 });
  }

  // Require recorded parental consent before storing any child data.
  const parentSnap = await adminDb.collection("users").doc(parentUid).get();
  if (!parentSnap.exists || parentSnap.data()?.consent?.given !== true) {
    return NextResponse.json({ error: "consent required" }, { status: 403 });
  }

  const loginCode = await uniqueLoginCode();
  const pin = generatePin();

  const studentRef = adminDb.collection("students").doc();
  await studentRef.set({
    familyId: parentUid,
    name,
    grade,
    language,
    loginCode,
    pinHash: hashPin(pin),
    createdAt: Date.now(),
  });

  // Return the plaintext credentials once so the parent can share them.
  return NextResponse.json({
    studentId: studentRef.id,
    name,
    grade,
    language,
    loginCode,
    pin,
  });
}
