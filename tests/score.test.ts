import { describe, it, expect } from "vitest";
import { scoreAssessment, type Answers } from "@/lib/mbti/score";
import { QUESTIONS } from "@/content/questions";
import type { Pole } from "@/content/questions";

/** Build answers by always choosing the option matching one pole per dimension. */
function answersFor(poles: Pole[]): Answers {
  const wanted = new Set(poles);
  const a: Answers = {};
  for (const q of QUESTIONS) {
    const opt = q.options.find((o) => wanted.has(o.pole)) ?? q.options[0];
    a[q.id] = opt.pole;
  }
  return a;
}

describe("scoreAssessment", () => {
  it("produces a clear type when every answer leans one way", () => {
    const { type } = scoreAssessment(answersFor(["E", "S", "T", "J"]));
    expect(type).toBe("ESTJ");
  });

  it("produces the opposite type for opposite answers", () => {
    const { type } = scoreAssessment(answersFor(["I", "N", "F", "P"]));
    expect(type).toBe("INFP");
  });

  it("is deterministic for the same answers", () => {
    const a = answersFor(["E", "N", "F", "J"]);
    expect(scoreAssessment(a).type).toBe(scoreAssessment(a).type);
    expect(scoreAssessment(a).type).toBe("ENFJ");
  });

  it("resolves ties to I / N / F / P", () => {
    // No answers at all → every dimension is 0-0 → tie everywhere.
    const { type } = scoreAssessment({});
    expect(type).toBe("INFP");
  });

  it("counts poles into dimension scores", () => {
    const { scores } = scoreAssessment(answersFor(["E", "S", "T", "J"]));
    expect(scores.EI.E).toBeGreaterThan(scores.EI.I);
    expect(scores.SN.S).toBeGreaterThan(scores.SN.N);
    expect(scores.TF.T).toBeGreaterThan(scores.TF.F);
    expect(scores.JP.J).toBeGreaterThan(scores.JP.P);
  });
});
