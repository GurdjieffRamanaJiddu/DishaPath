import { readFileSync } from "node:fs";
import { beforeAll, afterAll, beforeEach, describe, it } from "vitest";
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
  type RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const PROJECT_ID = "edu-app-demo";
const PARENT = "parentP";
const OTHER_PARENT = "parentQ";
const STUDENT = "studentS";
const OTHER_STUDENT = "studentT";

let env: RulesTestEnvironment;

// Auth contexts
const parent = () => env.authenticatedContext(PARENT).firestore();
const otherParent = () => env.authenticatedContext(OTHER_PARENT).firestore();
const student = () =>
  env
    .authenticatedContext(STUDENT, { role: "student", familyId: PARENT })
    .firestore();
const otherStudent = () =>
  env
    .authenticatedContext(OTHER_STUDENT, { role: "student", familyId: OTHER_PARENT })
    .firestore();

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules: readFileSync("firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });
});

afterAll(async () => {
  await env.cleanup();
});

beforeEach(async () => {
  await env.clearFirestore();
  // Seed a student profile and one of each task type, bypassing rules.
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, "students", STUDENT), {
      familyId: PARENT,
      name: "Aarav",
      grade: 6,
      language: "en",
      loginCode: "ABC123",
      pinHash: "x",
      mbtiType: "INTJ",
    });
    await setDoc(doc(db, "students", STUDENT, "tasks", "t_student"), {
      studentId: STUDENT,
      familyId: PARENT,
      month: 1,
      focus: "Discover yourself",
      title: "Read your report",
      assignee: "student",
      status: "TODO",
      order: 0,
    });
    await setDoc(doc(db, "students", STUDENT, "tasks", "t_parent"), {
      studentId: STUDENT,
      familyId: PARENT,
      month: 1,
      focus: "Discover yourself",
      title: "Talk with your child",
      assignee: "parent",
      status: "TODO",
      order: 1,
    });
  });
});

describe("users", () => {
  it("a parent can write their own doc but not another's", async () => {
    await assertSucceeds(
      setDoc(doc(parent(), "users", PARENT), { role: "parent", familyId: PARENT }),
    );
    await assertFails(
      setDoc(doc(parent(), "users", OTHER_PARENT), { role: "parent" }),
    );
  });
});

describe("students", () => {
  it("the owning parent and the student can read the profile", async () => {
    await assertSucceeds(getDoc(doc(parent(), "students", STUDENT)));
    await assertSucceeds(getDoc(doc(student(), "students", STUDENT)));
  });

  it("another family cannot read the profile", async () => {
    await assertFails(getDoc(doc(otherParent(), "students", STUDENT)));
    await assertFails(getDoc(doc(otherStudent(), "students", STUDENT)));
  });

  it("a student may write only assessment fields, not credentials", async () => {
    await assertSucceeds(
      updateDoc(doc(student(), "students", STUDENT), {
        mbtiType: "ENFP",
        dimensionScores: { EI: { E: 3, I: 2 } },
        assessmentCompletedAt: 1,
      }),
    );
    // Trying to change the family link or credentials must fail.
    await assertFails(
      updateDoc(doc(student(), "students", STUDENT), { familyId: OTHER_PARENT }),
    );
    await assertFails(
      updateDoc(doc(student(), "students", STUDENT), { loginCode: "HACKED" }),
    );
  });
});

describe("tasks", () => {
  it("a student can mark their own task done", async () => {
    await assertSucceeds(
      updateDoc(doc(student(), "students", STUDENT, "tasks", "t_student"), {
        status: "STUDENT_DONE",
        studentMarkedAt: 1,
      }),
    );
  });

  it("a student CANNOT self-confirm a task", async () => {
    await assertFails(
      updateDoc(doc(student(), "students", STUDENT, "tasks", "t_student"), {
        status: "CONFIRMED",
        parentConfirmedAt: 1,
      }),
    );
  });

  it("a student cannot touch a parent-assigned task", async () => {
    await assertFails(
      updateDoc(doc(student(), "students", STUDENT, "tasks", "t_parent"), {
        status: "CONFIRMED",
      }),
    );
  });

  it("the parent can LIST the student's tasks (query, not just get)", async () => {
    await assertSucceeds(
      getDocs(collection(parent(), "students", STUDENT, "tasks")),
    );
  });

  it("another family cannot list the tasks", async () => {
    await assertFails(
      getDocs(collection(otherParent(), "students", STUDENT, "tasks")),
    );
  });

  it("the parent can confirm a student's task", async () => {
    await assertSucceeds(
      updateDoc(doc(parent(), "students", STUDENT, "tasks", "t_student"), {
        status: "CONFIRMED",
        parentConfirmedAt: 1,
      }),
    );
  });

  it("another family cannot read or confirm the tasks", async () => {
    await assertFails(
      getDoc(doc(otherParent(), "students", STUDENT, "tasks", "t_student")),
    );
    await assertFails(
      updateDoc(doc(otherParent(), "students", STUDENT, "tasks", "t_student"), {
        status: "CONFIRMED",
      }),
    );
  });
});
