import "server-only";
import {
  initializeApp,
  getApps,
  getApp,
  cert,
  applicationDefault,
  type App,
  type AppOptions,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// When the emulator host vars are set, the Admin SDK talks to the local
// emulators and does not need real service-account credentials.
const usingEmulator = !!process.env.FIREBASE_AUTH_EMULATOR_HOST;

function buildOptions(): AppOptions {
  const projectId =
    process.env.FIREBASE_PROJECT_ID ??
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ??
    "edu-app-demo";

  if (usingEmulator) {
    return { projectId };
  }

  // Production: prefer an inline JSON service account, else ADC.
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (raw) {
    const parsed = JSON.parse(raw);
    return { credential: cert(parsed), projectId: parsed.project_id ?? projectId };
  }
  return { credential: applicationDefault(), projectId };
}

const app: App = getApps().length ? getApp() : initializeApp(buildOptions());

export const adminAuth = getAuth(app);
export const adminDb = getFirestore(app);
