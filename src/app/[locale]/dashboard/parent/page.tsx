"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/lib/auth-context";
import {
  confirmTask,
  getParent,
  listStudents,
  listTasks,
} from "@/lib/repository";
import { Link, useRouter } from "@/i18n/navigation";
import type { Student, Task } from "@/lib/types";
import AppHeader from "@/components/AppHeader";
import TaskCard from "@/components/TaskCard";
import { Button, Card, PageShell, ProgressBar } from "@/components/ui";

interface ChildView {
  student: Student;
  tasks: Task[];
}

export default function ParentDashboard() {
  const t = useTranslations("dashboard");
  const c = useTranslations("common");
  const r = useTranslations("report");
  const { user, role, familyId, loading } = useAuth();
  const router = useRouter();
  const [children, setChildren] = useState<ChildView[]>([]);
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    if (!familyId || !user) return;
    const parent = await getParent(user.uid);
    if (!parent?.consent?.given) {
      router.replace("/onboarding");
      return;
    }
    const students = await listStudents(familyId);
    const views = await Promise.all(
      students.map(async (student) => ({
        student,
        tasks: student.assessmentCompletedAt ? await listTasks(student.id) : [],
      })),
    );
    setChildren(views);
    setReady(true);
  }, [familyId, user, router]);

  useEffect(() => {
    if (loading) return;
    if (!user || role !== "parent") {
      router.replace("/login?role=parent");
      return;
    }
    load();
  }, [loading, user, role, router, load]);

  async function onConfirm(task: Task) {
    await confirmTask(task.studentId, task.id);
    setChildren((prev) =>
      prev.map((cv) =>
        cv.student.id === task.studentId
          ? {
              ...cv,
              tasks: cv.tasks.map((x) =>
                x.id === task.id ? { ...x, status: "CONFIRMED" } : x,
              ),
            }
          : cv,
      ),
    );
  }

  if (!ready) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <p className="text-center">{c("loading")}</p>
        </PageShell>
      </>
    );
  }

  return (
    <>
      <AppHeader />
      <PageShell>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{t("parentTitle")}</h1>

          {/* Children */}
          <section className="space-y-3">
            <h2 className="px-1 font-bold">{t("yourChildren")}</h2>
            {children.map(({ student, tasks }) => {
              const done = tasks.filter((x) => x.status === "CONFIRMED").length;
              return (
                <Card key={student.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">{student.name}</div>
                      <div className="text-sm text-foreground/60">
                        {c("grade")} {student.grade}
                        {student.mbtiType ? ` · ${student.mbtiType}` : ""}
                      </div>
                    </div>
                    {student.mbtiType && (
                      <Link href={`/report/${student.id}`}>
                        <Button variant="secondary" className="px-3 py-2 text-sm">
                          {r("viewReport")}
                        </Button>
                      </Link>
                    )}
                  </div>
                  {student.assessmentCompletedAt ? (
                    <div>
                      <div className="mb-1 flex justify-between text-sm font-medium">
                        <span>{t("progress")}</span>
                        <span>
                          {t("ofTasksDone", { done, total: tasks.length })}
                        </span>
                      </div>
                      <ProgressBar value={(done / (tasks.length || 1)) * 100} />
                    </div>
                  ) : (
                    <p className="text-sm text-foreground/60">{t("noAssessment")}</p>
                  )}
                </Card>
              );
            })}
            <Link href="/onboarding">
              <Button variant="ghost" className="w-full border border-dashed border-border">
                + {t("addChild")}
              </Button>
            </Link>
          </section>

          {/* Tasks to confirm */}
          <section className="space-y-3">
            <h2 className="px-1 font-bold">{t("tasksToConfirm")}</h2>
            {(() => {
              const pending = children.flatMap((cv) =>
                cv.tasks
                  .filter(
                    (x) =>
                      (x.assignee === "student" && x.status === "STUDENT_DONE") ||
                      (x.assignee === "parent" && x.status === "TODO"),
                  )
                  .map((task) => ({ task, name: cv.student.name })),
              );
              if (pending.length === 0)
                return (
                  <Card>
                    <p className="text-center text-sm text-foreground/60">
                      {t("nothingToConfirm")}
                    </p>
                  </Card>
                );
              return (
                <div className="space-y-2">
                  {pending.map(({ task, name }) => (
                    <div key={task.id}>
                      <div className="mb-1 px-1 text-xs font-semibold text-foreground/50">
                        {name} ·{" "}
                        {task.assignee === "parent"
                          ? t("parentHelpTasks")
                          : r("studentTasks")}
                      </div>
                      <TaskCard task={task} viewer="parent" onAction={onConfirm} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </section>
        </div>
      </PageShell>
    </>
  );
}
