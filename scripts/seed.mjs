// Seed a fixed test student so you can use Student Login without going through
// the parent OTP -> consent -> add-child flow every time.
//
// Run while the emulators are running:  npm run seed
// (npm run seed loads .env.local so the PIN is hashed with the same APP_SECRET
//  the app uses, and points the Admin SDK at the emulator.)
import { createHash } from "node:crypto";
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  console.error(
    "FIRESTORE_EMULATOR_HOST is not set. Start the emulators first, then run `npm run seed`.",
  );
  process.exit(1);
}

const SECRET = process.env.APP_SECRET ?? "dev-only-secret-change-me";
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "edu-app-demo";
const hashPin = (pin) =>
  createHash("sha256").update(`${pin}::${SECRET}`).digest("hex");

// ---- Fixed test credentials ----
const PARENT_UID = "test-parent";
const PARENT_PHONE = "+919876543210"; // Test parent phone (10 digits after +91)
const STUDENT_ID = "test-student";
const LOGIN_CODE = "TEST01"; // student "user id"
const PIN = "1234"; // student "password"

const app = getApps().length ? getApps()[0] : initializeApp({ projectId });
const db = getFirestore(app);
const auth = getAuth(app);
const now = Date.now();

// Parent auth account + consent doc, so the family is valid and you can also
// test the parent side (log in via OTP with the phone below).
try {
  await auth.createUser({ uid: PARENT_UID, phoneNumber: PARENT_PHONE });
} catch {
  // Already exists from a previous seed — fine.
}
await db.collection("users").doc(PARENT_UID).set(
  {
    uid: PARENT_UID,
    role: "parent",
    phone: PARENT_PHONE,
    language: "en",
    consent: { given: true, ts: now },
    familyId: PARENT_UID,
    createdAt: now,
  },
  { merge: true },
);

// The test student. merge:true keeps any assessment/tasks from a prior run.
await db.collection("students").doc(STUDENT_ID).set(
  {
    familyId: PARENT_UID,
    name: "Test Student",
    grade: 6,
    language: "en",
    loginCode: LOGIN_CODE,
    pinHash: hashPin(PIN),
    createdAt: now,
  },
  { merge: true },
);

console.log("✅ Seeded test accounts:");
console.log("");
console.log("👨‍👩‍👧 PARENT LOGIN (development mode):");
console.log(`   Phone: 9876543210`);
console.log(`   OTP:   Any value (will be bypassed in emulator)`);
console.log("");
console.log("👤 STUDENT LOGIN:");
console.log(`   Code: ${LOGIN_CODE}`);
console.log(`   PIN:  ${PIN}`);
process.exit(0);
