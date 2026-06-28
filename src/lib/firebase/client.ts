"use client";

import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  type Auth,
} from "firebase/auth";
import {
  getFirestore,
  connectFirestoreEmulator,
  type Firestore,
} from "firebase/firestore";

const useEmulator = process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR === "true";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "demo-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ??
    (useEmulator ? "edu-app-demo" : undefined),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

// Connect to local emulators once, in the browser, during development.
declare global {
  // eslint-disable-next-line no-var
  var __DISHAPATH_EMULATORS_CONNECTED__: boolean | undefined;
}

if (useEmulator && typeof window !== "undefined" && !globalThis.__DISHAPATH_EMULATORS_CONNECTED__) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  // Phone-auth reCAPTCHA is bypassed against the emulator.
  auth.settings.appVerificationDisabledForTesting = true;
  globalThis.__DISHAPATH_EMULATORS_CONNECTED__ = true;
}

export { app };
