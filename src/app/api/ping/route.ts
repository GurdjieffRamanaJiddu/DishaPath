import { NextResponse } from "next/server";

// Temporary diagnostic endpoint (no auth, no secrets leaked) to debug the live
// deployment. Reports which build is serving, whether the service-account env
// var is present/valid, and the real Firebase error if any.
export const dynamic = "force-dynamic";

export async function GET() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  const info: Record<string, unknown> = {
    marker: "ping-v1",
    node: process.version,
    appSecretSet: !!process.env.APP_SECRET,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? null,
    serviceAccount: {
      set: !!raw,
      length: raw?.length ?? 0,
      firstChar: raw ? raw.trim()[0] : null,
      looksLikeJson: raw ? raw.trim().startsWith("{") : false,
    },
  };

  try {
    const { getAdminDb } = await import("@/lib/firebase/admin");
    const snap = await getAdminDb().collection("students").limit(1).get();
    info.firestore = { ok: true, sampleSize: snap.size };
  } catch (e) {
    info.firestore = {
      ok: false,
      error: e instanceof Error ? `${e.name}: ${e.message}` : String(e),
    };
  }

  return NextResponse.json(info);
}
