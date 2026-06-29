import "server-only";
import {
  initializeApp,
  getApps,
  getApp,
  cert,
  applicationDefault,
  type App,
} from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

// Accept the service account as raw JSON or base64-encoded JSON (base64 is
// paste-safe in dashboards: no quotes, braces, or newlines to mangle).
function loadServiceAccount(): Record<string, unknown> | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) return null;
  const trimmed = raw.trim();
  const text = trimmed.startsWith("{")
    ? trimmed
    : Buffer.from(trimmed, "base64").toString("utf8");
  const parsed = JSON.parse(text) as Record<string, unknown>;
  // Some hosts store the private key with literal "\n" instead of real
  // newlines; normalize so cert() can parse it.
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
      projectId: (sa.project_id as string) ?? fallbackProjectId,
    });
  }
  return initializeApp({
    credential: applicationDefault(),
    projectId: fallbackProjectId,
  });
}

// Lazy singletons: initialize on first use (inside route handlers, where errors
// are catchable) rather than at module load (which would 500 the whole route).
let _auth: Auth | null = null;
let _db: Firestore | null = null;

export function getAdminAuth(): Auth {
  return (_auth ??= getAuth(buildApp()));
}

export function getAdminDb(): Firestore {
  return (_db ??= getFirestore(buildApp()));
}
