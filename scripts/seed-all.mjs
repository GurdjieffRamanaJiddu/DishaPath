// Dev/test helper: seed one fully-assessed student for EVERY MBTI type under
// the test parent, so you can review all 16 report variants.
//
//   As a parent: log in with phone 9876543210 (OTP shown in the emulator) to see
//                all 16 children, one per type, each with a "View report" link.
//   As a student: the login code IS the type code, with PIN 1234.
//                 For example code "INTJ" / PIN 1234, code "ENFP" / PIN 1234.
//
// Run while the emulators are running:  npm run seed:all
import { createHash } from "node:crypto";
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  console.error("FIRESTORE_EMULATOR_HOST is not set. Start the emulators first, then run `npm run seed:all`.");
  process.exit(1);
}

const SECRET = process.env.APP_SECRET ?? "dev-only-secret-change-me";
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "edu-app-demo";
const hashPin = (pin) => createHash("sha256").update(`${pin}::${SECRET}`).digest("hex");

const MBTI_TYPES = [
  "ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ",
];

const PARENT_UID = "test-parent";
const PARENT_PHONE = "+919876543210";
const PIN = "1234";

function scoresFor(type) {
  const has = (l) => type.includes(l);
  return {
    EI: { E: has("E") ? 4 : 1, I: has("I") ? 4 : 1 },
    SN: { S: has("S") ? 4 : 1, N: has("N") ? 4 : 1 },
    TF: { T: has("T") ? 4 : 1, F: has("F") ? 4 : 1 },
    JP: { J: has("J") ? 4 : 1, P: has("P") ? 4 : 1 },
  };
}

const app = getApps().length ? getApps()[0] : initializeApp({ projectId });
const db = getFirestore(app);
const auth = getAuth(app);
const now = Date.now();

// Ensure the test parent (auth account + consented profile).
try {
  await auth.createUser({ uid: PARENT_UID, phoneNumber: PARENT_PHONE });
} catch {
  // already exists
}
await db.collection("users").doc(PARENT_UID).set(
  { uid: PARENT_UID, role: "parent", phone: PARENT_PHONE, language: "en", consent: { given: true, ts: now }, familyId: PARENT_UID, createdAt: now },
  { merge: true },
);

for (const type of MBTI_TYPES) {
  await db.collection("students").doc(`test-${type}`).set(
    {
      familyId: PARENT_UID,
      name: `Test ${type}`,
      grade: 6,
      language: "en",
      loginCode: type, // login code IS the type, e.g. "INTJ"
      pinHash: hashPin(PIN),
      mbtiType: type,
      dimensionScores: scoresFor(type),
      assessmentCompletedAt: now,
      createdAt: now,
    },
    { merge: true },
  );
}

console.log(`Seeded ${MBTI_TYPES.length} test students, one per MBTI type.`);
console.log("");
console.log("PARENT: log in with phone 9876543210 to see all 16 reports.");
console.log("STUDENT: login code is the type name, PIN 1234. For example:");
console.log("  INTJ / 1234   ENFP / 1234   ESFP / 1234   (any of the 16 type codes)");
process.exit(0);
