import { getTypeContent } from "@/content/mbti";
import type { Assignee, Locale, MbtiType } from "@/lib/types";

export interface NewTask {
  month: number;
  focus: string;
  title: string;
  assignee: Assignee;
  status: "TODO";
  order: number;
}

/**
 * Snapshot a type's 12-month plan into flat task records in the child's
 * language. Snapshotting (rather than referencing the source content) means a
 * child's assigned tasks stay stable even if the source content is later edited.
 */
export function generateTasks(type: MbtiType, locale: Locale): NewTask[] {
  const content = getTypeContent(type);
  const tasks: NewTask[] = [];
  let order = 0;

  for (const month of content.plan) {
    const focus = month.focus[locale];
    for (const t of month.studentTasks) {
      tasks.push({
        month: month.month,
        focus,
        title: t[locale],
        assignee: "student",
        status: "TODO",
        order: order++,
      });
    }
    for (const t of month.parentTasks) {
      tasks.push({
        month: month.month,
        focus,
        title: t[locale],
        assignee: "parent",
        status: "TODO",
        order: order++,
      });
    }
  }

  return tasks;
}
