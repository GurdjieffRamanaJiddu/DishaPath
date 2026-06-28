"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/lib/auth-context";
import { getStudent, saveAssessment } from "@/lib/repository";
import { scoreAssessment, type Answers } from "@/lib/mbti/score";
import { QUESTIONS, gradeToBand } from "@/content/questions";
import { useRouter } from "@/i18n/navigation";
import type { Student } from "@/lib/types";
import AppHeader from "@/components/AppHeader";
import { Button, Card, PageShell, ProgressBar } from "@/components/ui";

export default function AssessmentPage() {
  const t = useTranslations("assessment");
  const c = useTranslations("common");
  const { user, role, studentId, loading } = useAuth();
  const router = useRouter();

  const [student, setStudent] = useState<Student | null>(null);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user || role !== "student" || !studentId) {
      router.replace("/login?role=student");
      return;
    }
    getStudent(studentId).then((s) => {
      if (!s) return;
      if (s.assessmentCompletedAt) {
        router.replace("/dashboard/student");
        return;
      }
      setStudent(s);
    });
  }, [loading, user, role, studentId, router]);

  const lang = student?.language ?? "en";
  const band = useMemo(
    () => (student ? gradeToBand(student.grade) : "junior"),
    [student],
  );
  const total = QUESTIONS.length;
  const current = QUESTIONS[index];

  async function choose(pole: string) {
    const next = { ...answers, [current.id]: pole as Answers[string] };
    setAnswers(next);
    if (index + 1 < total) {
      setIndex(index + 1);
    } else {
      await finish(next);
    }
  }

  async function finish(finalAnswers: Answers) {
    if (!student) return;
    setSaving(true);
    const { type, scores } = scoreAssessment(finalAnswers);
    await saveAssessment(student, type, scores);
    router.replace(`/report/${student.id}`);
  }

  if (!student) {
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
        {!started ? (
          <Card className="space-y-4 text-center">
            <div className="text-5xl">🌟</div>
            <h1 className="text-2xl font-bold">
              {t("welcomeTitle", { name: student.name })}
            </h1>
            <p className="text-foreground/70">{t("welcomeBody")}</p>
            <Button
              data-testid="quiz-start"
              onClick={() => setStarted(true)}
              className="w-full"
            >
              {t("start")}
            </Button>
          </Card>
        ) : saving ? (
          <Card className="space-y-4 text-center">
            <div className="text-5xl">🎉</div>
            <h2 className="text-xl font-bold">{t("doneTitle")}</h2>
            <p className="text-foreground/70">{t("computing")}</p>
          </Card>
        ) : (
          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium text-foreground/60">
                {t("questionOf", { current: index + 1, total })}
              </p>
              <ProgressBar value={((index) / total) * 100} />
            </div>
            <Card>
              <h2 className="text-xl font-bold">{current.prompt[band][lang]}</h2>
              <div className="mt-5 space-y-3">
                {current.options.map((opt, i) => (
                  <button
                    key={opt.pole}
                    data-testid={`quiz-option-${i}`}
                    onClick={() => choose(opt.pole)}
                    className="w-full rounded-xl border border-border bg-white p-4 text-left text-base font-medium transition hover:border-brand hover:bg-brand-soft"
                  >
                    {opt.text[lang]}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}
      </PageShell>
    </>
  );
}
