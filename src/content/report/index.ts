import type { MbtiType } from "@/content/mbti/types";
import type { ReportContent } from "./types";

import INTJ from "./entries/INTJ";
import INTP from "./entries/INTP";
import ENTJ from "./entries/ENTJ";
import ENTP from "./entries/ENTP";
import INFJ from "./entries/INFJ";
import INFP from "./entries/INFP";
import ENFJ from "./entries/ENFJ";
import ENFP from "./entries/ENFP";
import ISTJ from "./entries/ISTJ";
import ISFJ from "./entries/ISFJ";
import ESTJ from "./entries/ESTJ";
import ESFJ from "./entries/ESFJ";
import ISTP from "./entries/ISTP";
import ISFP from "./entries/ISFP";
import ESTP from "./entries/ESTP";
import ESFP from "./entries/ESFP";

const ENTRIES: ReportContent[] = [
  INTJ, INTP, ENTJ, ENTP,
  INFJ, INFP, ENFJ, ENFP,
  ISTJ, ISFJ, ESTJ, ESFJ,
  ISTP, ISFP, ESTP, ESFP,
];

/** Rich, fully-localized report payloads, keyed by type. All 16 are authored. */
export const REPORTS: Record<MbtiType, ReportContent> = ENTRIES.reduce(
  (acc, r) => {
    acc[r.code] = r;
    return acc;
  },
  {} as Record<MbtiType, ReportContent>,
);

export function getReport(type: MbtiType): ReportContent | null {
  return REPORTS[type] ?? null;
}

export type { ReportContent } from "./types";
