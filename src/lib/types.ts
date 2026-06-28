import type { Locale, MbtiType } from "@/content/mbti/types";

export type { Locale, MbtiType };

export type Role = "parent" | "student";
export type Grade = 5 | 6 | 7 | 8;
export const GRADES: Grade[] = [5, 6, 7, 8];

export type Dimension = "EI" | "SN" | "TF" | "JP";

/** Net lean per dichotomy plus the chosen letter. Positive favours the first letter. */
export interface DimensionScores {
  EI: { E: number; I: number };
  SN: { S: number; N: number };
  TF: { T: number; F: number };
  JP: { J: number; P: number };
}

export interface ParentUser {
  uid: string;
  role: "parent";
  phone: string;
  language: Locale;
  consent: { given: boolean; ts: number };
  familyId: string;
  name?: string;
  createdAt: number;
}

export interface Student {
  id: string;
  familyId: string;
  name: string;
  grade: Grade;
  language: Locale;
  /** Login "username" for the child (safe to show the parent again). */
  loginCode?: string;
  /** Hashed PIN, never returned to the client. */
  pinHash?: string;
  mbtiType?: MbtiType;
  dimensionScores?: DimensionScores;
  assessmentCompletedAt?: number;
  createdAt: number;
}

export type TaskStatus = "TODO" | "STUDENT_DONE" | "CONFIRMED";
export type Assignee = "student" | "parent";

export interface Task {
  id: string;
  studentId: string;
  familyId: string;
  month: number;
  focus: string; // snapshot in the student's language
  title: string; // snapshot in the student's language
  assignee: Assignee;
  status: TaskStatus;
  studentMarkedAt?: number;
  parentConfirmedAt?: number;
  order: number;
}
