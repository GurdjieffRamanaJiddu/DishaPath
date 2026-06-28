export const LOCALES = ["en", "hi"] as const;
export type Locale = (typeof LOCALES)[number];

/** A string available in both supported languages. */
export type Localized = Record<Locale, string>;

/** Compact constructor for a bilingual string. */
export const L = (en: string, hi: string): Localized => ({ en, hi });

export const MBTI_TYPES = [
  "ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ",
] as const;
export type MbtiType = (typeof MBTI_TYPES)[number];

export interface Career {
  title: Localized;
  why: Localized;
}

/** Compact constructor for a Career entry. */
export const career = (
  titleEn: string,
  titleHi: string,
  whyEn: string,
  whyHi: string,
): Career => ({ title: { en: titleEn, hi: titleHi }, why: { en: whyEn, hi: whyHi } });

export interface MonthPlan {
  /** 1 to 12 */
  month: number;
  focus: Localized;
  studentTasks: Localized[];
  parentTasks: Localized[];
}

export interface TypeContent {
  code: MbtiType;
  label: Localized;
  tagline: Localized;
  description: Localized;
  strengths: Localized[];
  /** 10 to 15 career paths. */
  careers: Career[];
  /** Exactly 12 months. */
  plan: MonthPlan[];
}

/**
 * Type-specific snippets injected into the shared 12-month guidance arc.
 * Keeps every type's plan consistent in method while tailored in content.
 */
export interface PlanSeed {
  /** A field/area to explore (month 2). */
  exploreField: Localized;
  /** A kind of professional/role model to learn about (month 3). */
  roleModel: Localized;
  /** A key skill to start building (month 4). */
  skill: Localized;
  /** School subjects to strengthen (month 5). */
  subjects: Localized;
  /** A hands-on mini-project that suits this type (month 6 & 7). */
  project: Localized;
  /** What the child showcases at the end (month 12). */
  showcase: Localized;
}

/** Authored, unique-per-type data. The full TypeContent.plan is built from seed. */
export interface TypeData {
  code: MbtiType;
  label: Localized;
  tagline: Localized;
  description: Localized;
  strengths: Localized[];
  careers: Career[];
  seed: PlanSeed;
}
