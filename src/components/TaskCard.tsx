"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import type { Role, Task } from "@/lib/types";
import { Button } from "./ui";

export default function TaskCard({
  task,
  viewer,
  onAction,
}: {
  task: Task;
  viewer: Role;
  onAction: (task: Task) => Promise<void>;
}) {
  const t = useTranslations("dashboard");
  const [busy, setBusy] = useState(false);

  async function act() {
    setBusy(true);
    try {
      await onAction(task);
    } finally {
      setBusy(false);
    }
  }

  // Decide the control to show.
  let action: { label: string; variant: "primary" | "success" } | null = null;
  let chip: { label: string; tone: "wait" | "done" } | null = null;

  if (task.status === "CONFIRMED") {
    chip = { label: `✓ ${t("done")}`, tone: "done" };
  } else if (viewer === "student" && task.assignee === "student") {
    if (task.status === "TODO") action = { label: t("iDidThis"), variant: "primary" };
    else chip = { label: t("waitingConfirm"), tone: "wait" };
  } else if (viewer === "parent") {
    if (task.assignee === "student" && task.status === "STUDENT_DONE")
      action = { label: t("confirm"), variant: "success" };
    else if (task.assignee === "parent" && task.status === "TODO")
      action = { label: t("confirm"), variant: "success" };
    else if (task.assignee === "student" && task.status === "TODO")
      chip = { label: t("waitingConfirm"), tone: "wait" };
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white p-3">
      <span className="text-sm">{task.title}</span>
      {action && (
        <Button
          variant={action.variant}
          onClick={act}
          disabled={busy}
          className="shrink-0 px-3 py-2 text-sm"
        >
          {action.label}
        </Button>
      )}
      {chip && (
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            chip.tone === "done"
              ? "bg-green-100 text-success"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {chip.label}
        </span>
      )}
    </div>
  );
}
