import type { Localized, MbtiType } from "@/content/mbti/types";

/** One mapped career path with India-specific, modern guidance. */
export interface RichCareer {
  /** Indian job title. */
  title: Localized;
  /** Simplified explanation of the daily work. */
  daily: Localized;
  /** School subjects to focus on. */
  subjects: Localized;
  /** Localized Indian avenues and modern shifts (digital, regional, entrance exams). */
  avenue: Localized;
  /** True for emerging / new-age fields (shown with a badge). */
  modern?: boolean;
}

/** One milestone tied to a specific grade. */
export interface GradeStep {
  grade: 5 | 6 | 7 | 8;
  milestone: Localized;
}

/** One month of the enhanced parent tracking guide. */
export interface RichMonth {
  month: number;
  /** Theme, e.g. "Mindset and Observation". */
  theme: Localized;
  /** Low-cost or free parental action items for Tier 2 and Tier 3 cities. */
  actions: Localized[];
  /** Signs for parents to watch for to confirm growth and engagement. */
  tracker: Localized[];
}

/** The full, localized report payload for one MBTI type. */
export interface ReportContent {
  code: MbtiType;
  /** Relatable modern name in English, e.g. "The Technical Builder". */
  archetypeEn: string;
  /** Conversational Hindi equivalent, e.g. "तकनीकी निर्माता". */
  archetypeHi: string;
  /** Roughly 300 words, written for the parent to understand the child's brain. */
  parentIntro: Localized;
  /** How the child operates in three environments. */
  blueprint: {
    school: Localized;
    home: Localized;
    social: Localized;
  };
  /** 5 core strengths. */
  superpowers: Localized[];
  /** 5 growth areas / blind spots. */
  growthAreas: Localized[];
  /** 10 to 15 concrete Indian career paths. */
  careers: RichCareer[];
  /** Milestones for grades 5, 6, 7, 8. */
  roadmap: GradeStep[];
  /** 12 months of themed parent guidance. */
  months: RichMonth[];
}
