import type { DimensionScores, MbtiType } from "@/lib/types";
import type { Pole } from "@/content/questions";

/** Map of questionId → the pole the student chose. */
export type Answers = Record<string, Pole>;

export interface ScoreResult {
  type: MbtiType;
  scores: DimensionScores;
}

/**
 * Deterministically score a completed assessment into a 4-letter MBTI type.
 * Ties resolve to I / N / F / P (a common MBTI convention) so the same answers
 * always yield the same type.
 */
export function scoreAssessment(answers: Answers): ScoreResult {
  const tally: Record<Pole, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };

  for (const pole of Object.values(answers)) {
    if (pole in tally) tally[pole] += 1;
  }

  const scores: DimensionScores = {
    EI: { E: tally.E, I: tally.I },
    SN: { S: tally.S, N: tally.N },
    TF: { T: tally.T, F: tally.F },
    JP: { J: tally.J, P: tally.P },
  };

  const l1 = tally.E > tally.I ? "E" : "I";
  const l2 = tally.S > tally.N ? "S" : "N";
  const l3 = tally.T > tally.F ? "T" : "F";
  const l4 = tally.J > tally.P ? "J" : "P";

  return { type: `${l1}${l2}${l3}${l4}` as MbtiType, scores };
}
