"use client";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  writeBatch,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { generateTasks } from "@/lib/mbti/generatePlan";
import type {
  DimensionScores,
  Grade,
  Locale,
  MbtiType,
  ParentUser,
  Student,
  Task,
} from "@/lib/types";

// ---------- Parent ----------

export async function getParent(uid: string): Promise<ParentUser | null> {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? (snap.data() as ParentUser) : null;
}

export async function saveParentConsent(
  uid: string,
  phone: string,
  language: Locale,
): Promise<void> {
  const data: ParentUser = {
    uid,
    role: "parent",
    phone,
    language,
    consent: { given: true, ts: Date.now() },
    familyId: uid,
    createdAt: Date.now(),
  };
  await setDoc(doc(db, "users", uid), data, { merge: true });
}

// ---------- Students ----------

export async function listStudents(familyId: string): Promise<Student[]> {
  const q = query(collection(db, "students"), where("familyId", "==", familyId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Student, "id">) }));
}

export async function getStudent(studentId: string): Promise<Student | null> {
  const snap = await getDoc(doc(db, "students", studentId));
  return snap.exists()
    ? ({ id: snap.id, ...(snap.data() as Omit<Student, "id">) })
    : null;
}

/**
 * Save assessment results onto the student doc and snapshot the 12-month plan
 * into the tasks subcollection. Called by the signed-in student.
 */
export async function saveAssessment(
  student: Student,
  type: MbtiType,
  scores: DimensionScores,
): Promise<void> {
  const batch = writeBatch(db);
  const studentRef = doc(db, "students", student.id);

  batch.update(studentRef, {
    mbtiType: type,
    dimensionScores: scores,
    assessmentCompletedAt: Date.now(),
  });

  const tasks = generateTasks(type, student.language);
  for (const t of tasks) {
    const taskRef = doc(collection(db, "students", student.id, "tasks"));
    batch.set(taskRef, {
      studentId: student.id,
      familyId: student.familyId,
      month: t.month,
      focus: t.focus,
      title: t.title,
      assignee: t.assignee,
      status: t.status,
      order: t.order,
    });
  }

  await batch.commit();
}

// ---------- Tasks ----------

export async function listTasks(studentId: string): Promise<Task[]> {
  const q = query(
    collection(db, "students", studentId, "tasks"),
    orderBy("order", "asc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Task, "id">) }));
}

/** Student marks their own task done (awaiting parent confirmation). */
export async function markTaskDone(studentId: string, taskId: string): Promise<void> {
  await updateDoc(doc(db, "students", studentId, "tasks", taskId), {
    status: "STUDENT_DONE",
    studentMarkedAt: Date.now(),
  });
}

/** Parent confirms a task (the source of truth on completion). */
export async function confirmTask(studentId: string, taskId: string): Promise<void> {
  await updateDoc(doc(db, "students", studentId, "tasks", taskId), {
    status: "CONFIRMED",
    parentConfirmedAt: Date.now(),
  });
}
