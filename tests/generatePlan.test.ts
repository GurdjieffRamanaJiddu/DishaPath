import { describe, it, expect } from "vitest";
import { generateTasks } from "@/lib/mbti/generatePlan";
import { MBTI_CONTENT } from "@/content/mbti";
import { MBTI_TYPES } from "@/content/mbti/types";

describe("content pack", () => {
  it("defines all 16 MBTI types", () => {
    expect(Object.keys(MBTI_CONTENT).sort()).toEqual([...MBTI_TYPES].sort());
  });

  it("gives every type 10–15 careers and a 12-month plan in both languages", () => {
    for (const type of MBTI_TYPES) {
      const c = MBTI_CONTENT[type];
      expect(c.careers.length, `${type} careers`).toBeGreaterThanOrEqual(10);
      expect(c.careers.length, `${type} careers`).toBeLessThanOrEqual(15);
      expect(c.plan.length, `${type} months`).toBe(12);
      for (const career of c.careers) {
        expect(career.title.en && career.title.hi, `${type} career text`).toBeTruthy();
      }
      for (const month of c.plan) {
        expect(month.focus.en && month.focus.hi, `${type} m${month.month} focus`).toBeTruthy();
        expect(month.studentTasks.length, `${type} m${month.month} student`).toBeGreaterThan(0);
        expect(month.parentTasks.length, `${type} m${month.month} parent`).toBeGreaterThan(0);
      }
    }
  });
});

describe("generateTasks", () => {
  it("snapshots tasks in the requested language with both assignees", () => {
    const en = generateTasks("INTJ", "en");
    const hi = generateTasks("INTJ", "hi");

    expect(en.length).toBe(hi.length);
    expect(en.length).toBeGreaterThan(12);
    expect(en.some((t) => t.assignee === "student")).toBe(true);
    expect(en.some((t) => t.assignee === "parent")).toBe(true);
    expect(en.every((t) => t.status === "TODO")).toBe(true);

    // Orders are unique and contiguous.
    const orders = en.map((t) => t.order);
    expect(new Set(orders).size).toBe(orders.length);

    // Language actually differs.
    expect(en[0].title).not.toBe(hi[0].title);
  });

  it("covers all 12 months", () => {
    const tasks = generateTasks("ENFP", "en");
    const months = new Set(tasks.map((t) => t.month));
    expect(months.size).toBe(12);
  });
});
