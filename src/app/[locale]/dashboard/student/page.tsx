"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/lib/auth-context";
import { getStudent, listTasks, markTaskDone } from "@/lib/repository";
import { Link, useRouter } from "@/i18n/navigation";
import type { Student, Task } from "@/lib/types";
import AppHeader from "@/components/AppHeader";
import TaskCard from "@/components/TaskCard";
import { Button, Card, PageShell, ProgressBar } from "@/components/ui";

export default function StudentDashboard() {
  const t = useTranslations("dashboard");
  const c = useTranslations("common");
  const r = useTranslations("report");
  const { user, role, studentId, loading } = useAuth();
  const router = useRouter();
  const [student, setStudent] = useState<Student | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    if (!studentId) return;
    const s = await getStudent(studentId);
    setStudent(s);
    if (s?.assessmentCompletedAt) setTasks(await listTasks(studentId));
    setReady(true);
  }, [studentId]);

  useEffect(() => {
    if (loading) return;
    if (!user || role !== "student" || !studentId) {
      router.replace("/login?role=student");
      return;
    }
    load();
  }, [loading, user, role, studentId, router, load]);

  async function onAction(task: Task) {
    await markTaskDone(task.studentId, task.id);
    setTasks((prev) =>
      prev.map((x) =>
        x.id === task.id ? { ...x, status: "STUDENT_DONE" } : x,
      ),
    );
  }

  if (!ready || !student) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <p className="text-center">{c("loading")}</p>
        </PageShell>
      </>
    );
  }

  // No assessment yet.
  if (!student.assessmentCompletedAt) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <Card className="space-y-4 text-center">
            <div className="text-5xl">🌟</div>
            <h1 className="text-2xl font-bold">
              {t("welcome", { name: student.name })}
            </h1>
            <p className="text-foreground/70">{t("noTasks")}</p>
            <Link href="/assessment">
              <Button className="w-full">{t("takeAssessment")}</Button>
            </Link>
          </Card>
        </PageShell>
      </>
    );
  }

  const myTasks = tasks.filter((x) => x.assignee === "student");
  const doneCount = myTasks.filter((x) => x.status === "CONFIRMED").length;

  // Group tasks by month for display.
  const byMonth = new Map<number, { focus: string; items: Task[] }>();
  for (const task of myTasks) {
    if (!byMonth.has(task.month))
      byMonth.set(task.month, { focus: task.focus, items: [] });
    byMonth.get(task.month)!.items.push(task);
  }

  return (
    <>
      <AppHeader />
      <PageShell>
        <div className="space-y-5">
          <Card className="space-y-3">
            <h1 className="text-xl font-bold">
              {t("welcome", { name: student.name })}
            </h1>
            <div>
              <div className="mb-1 flex justify-between text-sm font-medium">
                <span>{t("progress")}</span>
                <span>
                  {t("ofTasksDone", { done: doneCount, total: myTasks.length })}
                </span>
              </div>
              <ProgressBar value={(doneCount / (myTasks.length || 1)) * 100} />
            </div>
            <Link href={`/report/${student.id}`}>
              <Button variant="secondary" className="w-full">
                {r("viewReport")}
              </Button>
            </Link>
          </Card>

          <div>
            <h2 className="mb-2 px-1 font-bold">{t("myTasks")}</h2>
            <div className="space-y-4">
              {[...byMonth.entries()].map(([month, group]) => (
                <div key={month}>
                  <div className="mb-1 px-1 text-sm font-semibold text-foreground/60">
                    {r("month", { n: month })} · {group.focus}
                  </div>
                  <div className="space-y-2">
                    {group.items.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        viewer="student"
                        onAction={onAction}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
