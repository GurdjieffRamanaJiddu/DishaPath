import { NextResponse } from "next/server";
import { getAdminAuth } from "@/lib/firebase/admin";

// Development-only endpoint: bypass OTP for test parent account in emulator
export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "not available" }, { status: 403 });
  }

  if (!process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR) {
    return NextResponse.json({ error: "emulator only" }, { status: 403 });
  }

  try {
    const token = await getAdminAuth().createCustomToken("test-parent", {
      role: "parent",
    });

    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
