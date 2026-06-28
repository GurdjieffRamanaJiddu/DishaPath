import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { verifyPin } from "@/lib/crypto";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const loginCode =
    typeof body?.loginCode === "string" ? body.loginCode.trim().toUpperCase() : "";
  const pin = typeof body?.pin === "string" ? body.pin.trim() : "";

  if (!loginCode || !pin) {
    return NextResponse.json({ error: "missing credentials" }, { status: 400 });
  }

  const snap = await adminDb
    .collection("students")
    .where("loginCode", "==", loginCode)
    .limit(1)
    .get();

  if (snap.empty) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const studentDoc = snap.docs[0];
  const data = studentDoc.data();

  if (!data.pinHash || !verifyPin(pin, data.pinHash)) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  // Mint a custom token so the child signs in as their own student uid.
  const token = await adminAuth.createCustomToken(studentDoc.id, {
    role: "student",
    familyId: data.familyId,
  });

  return NextResponse.json({
    token,
    studentId: studentDoc.id,
    language: data.language,
  });
}
