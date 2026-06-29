import "server-only";
import {
  initializeApp,
  getApps,
  getApp,
  cert,
  applicationDefault,
  type App,
} from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

export interface ServiceAccount {
  client_email: string;
  private_key: string;
  project_id?: string;
  [k: string]: unknown;
}

// Accept the service account as raw JSON or base64-encoded JSON.
export function loadServiceAccount(): ServiceAccount | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) return null;
  const trimmed = raw.trim();
  const text = trimmed.startsWith("{")
    ? trimmed
    : Buffer.from(trimmed, "base64").toString("utf8");
  const parsed = JSON.parse(text) as ServiceAccount;
  if (typeof parsed.private_key === "string") {
    parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
  }
  return parsed;
}

function buildApp(): App {
  if (getApps().length) return getApp();

  const usingEmulator = !!process.env.FIREBASE_AUTH_EMULATOR_HOST;
  const fallbackProjectId =
    process.env.FIREBASE_PROJECT_ID ??
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ??
    "edu-app-demo";

  if (usingEmulator) return initializeApp({ projectId: fallbackProjectId });

  const sa = loadServiceAccount();
  if (sa) {
    return initializeApp({
      credential: cert(sa as never),
      projectId: sa.project_id ?? fallbackProjectId,
    });
  }
  return initializeApp({
    credential: applicationDefault(),
    projectId: fallbackProjectId,
  });
}

// Firestore only at module top: importing firebase-admin/auth eagerly pulls in
// jwks-rsa -> jose (ESM), which fails to load in the Vercel production bundle on
// Node 24. Firestore does not need it.
let _db: Firestore | null = null;
export function getAdminDb(): Firestore {
  return (_db ??= getFirestore(buildApp()));
}

// Lazy auth: only loaded when actually needed (parent ID-token verification in
// onboarding). The student-login hot path signs custom tokens directly instead
// (see customToken.ts), so it never imports firebase-admin/auth in production.
export async function getAdminAuth() {
  const { getAuth } = await import("firebase-admin/auth");
  return getAuth(buildApp());
}
