import { describe, it, expect } from "vitest";
import { REPORTS, getReport } from "@/content/report";
import { MBTI_TYPES } from "@/content/mbti/types";
import type { Localized } from "@/content/mbti/types";

const DASH = /[—–]/; // em-dash or en-dash

function bilingual(x: Localized | undefined): boolean {
  return !!x && typeof x.en === "string" && typeof x.hi === "string" && x.en.length > 0 && x.hi.length > 0;
}

describe("report content pack", () => {
  it("has a rich report for all 16 MBTI types", () => {
    for (const type of MBTI_TYPES) {
      expect(getReport(type), `${type} report`).not.toBeNull();
    }
    expect(Object.keys(REPORTS).sort()).toEqual([...MBTI_TYPES].sort());
  });

  it("never uses em-dashes or en-dashes anywhere", () => {
    for (const type of MBTI_TYPES) {
      const s = JSON.stringify(REPORTS[type]);
      expect(DASH.test(s), `${type} contains a dash`).toBe(false);
    }
  });

  it("has a complete, bilingual, correctly-sized payload per type", () => {
    for (const type of MBTI_TYPES) {
      const r = REPORTS[type]!;
      expect(r.code).toBe(type);
      expect(r.archetypeEn.length, `${type} archetypeEn`).toBeGreaterThan(3);
      expect(r.archetypeHi.length, `${type} archetypeHi`).toBeGreaterThan(2);

      // ~300-word parent intro in both languages.
      expect(r.parentIntro.en.length, `${type} intro en`).toBeGreaterThan(200);
      expect(r.parentIntro.hi.length, `${type} intro hi`).toBeGreaterThan(200);

      expect(bilingual(r.blueprint.school)).toBe(true);
      expect(bilingual(r.blueprint.home)).toBe(true);
      expect(bilingual(r.blueprint.social)).toBe(true);

      expect(r.superpowers.length, `${type} superpowers`).toBe(5);
      expect(r.growthAreas.length, `${type} growthAreas`).toBe(5);
      r.superpowers.forEach((s) => expect(bilingual(s)).toBe(true));
      r.growthAreas.forEach((s) => expect(bilingual(s)).toBe(true));

      expect(r.careers.length, `${type} careers`).toBeGreaterThanOrEqual(10);
      expect(r.careers.length, `${type} careers`).toBeLessThanOrEqual(15);
      r.careers.forEach((cr) => {
        expect(bilingual(cr.title)).toBe(true);
        expect(bilingual(cr.daily)).toBe(true);
        expect(bilingual(cr.subjects)).toBe(true);
        expect(bilingual(cr.avenue)).toBe(true);
        expect(cr.modern === undefined || typeof cr.modern === "boolean").toBe(true);
      });
      // At least one modern / new-age field per type.
      expect(r.careers.some((cr) => cr.modern), `${type} has a modern career`).toBe(true);

      // Roadmap covers grades 5,6,7,8.
      expect(r.roadmap.map((g) => g.grade).sort()).toEqual([5, 6, 7, 8]);
      r.roadmap.forEach((g) => expect(bilingual(g.milestone)).toBe(true));

      // 12 months, each with a theme and at least 2 actions + 2 tracker questions.
      expect(r.months.length, `${type} months`).toBe(12);
      expect(r.months.map((m) => m.month)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
      r.months.forEach((m) => {
        expect(bilingual(m.theme), `${type} m${m.month} theme`).toBe(true);
        expect(m.actions.length, `${type} m${m.month} actions`).toBeGreaterThanOrEqual(2);
        expect(m.tracker.length, `${type} m${m.month} tracker`).toBeGreaterThanOrEqual(2);
        m.actions.forEach((a) => expect(bilingual(a)).toBe(true));
        m.tracker.forEach((q) => expect(bilingual(q)).toBe(true));
      });
    }
  });
});
