"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getStudent } from "@/lib/repository";
import { getTypeContent } from "@/content/mbti";
import { getReport } from "@/content/report";
import { Link, useRouter } from "@/i18n/navigation";
import type { DimensionScores, Locale, Student } from "@/lib/types";
import AppHeader from "@/components/AppHeader";
import { Button, Card, PageShell } from "@/components/ui";

const DIMS: Array<{ key: keyof DimensionScores; a: string; b: string }> = [
  { key: "EI", a: "E", b: "I" },
  { key: "SN", a: "S", b: "N" },
  { key: "TF", a: "T", b: "F" },
  { key: "JP", a: "J", b: "P" },
];

function SectionTitle({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
      <span aria-hidden>{icon}</span>
      {children}
    </h2>
  );
}

export default function ReportPage() {
  const t = useTranslations("report");
  const c = useTranslations("common");
  const locale = useLocale() as Locale;
  const { studentId } = useParams<{ studentId: string }>();
  const { user, loading } = useAuth();
  const router = useRouter();
  const [student, setStudent] = useState<Student | null>(null);
  const [notReady, setNotReady] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    getStudent(studentId)
      .then((s) => {
        if (!s || !s.mbtiType) setNotReady(true);
        else setStudent(s);
      })
      .catch(() => setNotReady(true));
  }, [loading, user, studentId, router]);

  function downloadPdf() {
    // Expand every <details> so the whole guide prints, then open the print
    // dialog (browser "Save as PDF" handles Devanagari fonts reliably).
    document
      .querySelectorAll<HTMLDetailsElement>("details")
      .forEach((d) => (d.open = true));
    window.print();
  }

  if (notReady) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <p className="text-center">{c("errorGeneric")}</p>
        </PageShell>
      </>
    );
  }

  if (!student || !student.mbtiType) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <p className="text-center">{t("preparing")}</p>
        </PageShell>
      </>
    );
  }

  const base = getTypeContent(student.mbtiType);
  const rich = getReport(student.mbtiType);
  const scores = student.dimensionScores;

  return (
    <>
      <div className="no-print">
        <AppHeader />
      </div>
      <PageShell>
        <div id="report-root" className="space-y-6">
          {/* Download bar */}
          <div className="no-print flex justify-end">
            <Button onClick={downloadPdf} variant="secondary" className="px-4 py-2 text-sm">
              ⬇ {t("downloadPdf")}
            </Button>
          </div>

          {/* Hero / Archetype */}
          <Card className="bg-gradient-to-b from-brand-soft to-card text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t("yourType")}
            </p>
            <div className="mt-1 text-4xl font-extrabold tracking-widest text-brand">
              {base.code}
            </div>
            <div className="mt-1 text-2xl font-bold">
              {rich ? (locale === "hi" ? rich.archetypeHi : rich.archetypeEn) : base.label[locale]}
            </div>
            {rich && (
              <div className="text-sm text-foreground/60">
                {locale === "hi" ? rich.archetypeEn : rich.archetypeHi}
              </div>
            )}
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              {base.description[locale]}
            </p>
          </Card>

          {/* Dimensions visual */}
          {scores && (
            <Card>
              <SectionTitle icon="📊">{t("dimensions")}</SectionTitle>
              <div className="space-y-3">
                {DIMS.map(({ key, a, b }) => {
                  const pair = scores[key] as Record<string, number>;
                  const av = pair[a] ?? 0;
                  const bv = pair[b] ?? 0;
                  const total = av + bv || 1;
                  const aPct = (av / total) * 100;
                  const chosen = student.mbtiType!.includes(a) ? a : b;
                  return (
                    <div key={key}>
                      <div className="flex justify-between text-sm font-semibold">
                        <span className={chosen === a ? "text-brand" : "text-foreground/40"}>{a}</span>
                        <span className={chosen === b ? "text-brand" : "text-foreground/40"}>{b}</span>
                      </div>
                      <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-brand-soft">
                        <div className="h-full bg-brand" style={{ width: `${aPct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {rich ? (
            <>
              {/* 1. For parents (the 300-word intro) */}
              <Card>
                <SectionTitle icon="❤️">{t("forParents")}</SectionTitle>
                <p className="whitespace-pre-line leading-relaxed text-foreground/80">
                  {rich.parentIntro[locale]}
                </p>
              </Card>

              {/* 2. Blueprint */}
              <Card>
                <SectionTitle icon="🧠">{t("blueprint")}</SectionTitle>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: "🏫", title: t("atSchool"), body: rich.blueprint.school[locale] },
                    { icon: "🏠", title: t("atHome"), body: rich.blueprint.home[locale] },
                    { icon: "👫", title: t("social"), body: rich.blueprint.social[locale] },
                  ].map((b) => (
                    <div key={b.title} className="rounded-xl bg-background p-3">
                      <div className="text-2xl">{b.icon}</div>
                      <div className="mt-1 font-semibold">{b.title}</div>
                      <p className="mt-1 text-sm text-foreground/70">{b.body}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Superpowers + Growth areas */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <SectionTitle icon="⭐">{t("superpowers")}</SectionTitle>
                  <ul className="space-y-2">
                    {rich.superpowers.map((s) => (
                      <li key={s.en} className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-800">
                        {s[locale]}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <SectionTitle icon="🌱">{t("growthAreas")}</SectionTitle>
                  <ul className="space-y-2">
                    {rich.growthAreas.map((s) => (
                      <li key={s.en} className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800">
                        {s[locale]}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* 3. Career map */}
              <Card>
                <SectionTitle icon="💼">{t("careerMap")}</SectionTitle>
                <div className="space-y-3">
                  {rich.careers.map((career) => (
                    <div key={career.title.en} className="rounded-xl border border-border p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1 font-bold">{career.title[locale]}</div>
                        {career.modern && (
                          <span className="mt-0.5 shrink-0 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
                            ✦ {t("newAge")}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-foreground/70">{career.daily[locale]}</p>
                      <div className="mt-2 text-xs">
                        <span className="font-semibold text-foreground/60">{t("focusSubjects")}: </span>
                        <span className="text-brand">{career.subjects[locale]}</span>
                      </div>
                      <div className="mt-1 rounded-lg bg-brand-soft px-3 py-2 text-xs text-foreground/80">
                        <span className="font-semibold">{t("howToGetThere")}: </span>
                        {career.avenue[locale]}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 4. Roadmap */}
              <Card>
                <SectionTitle icon="🛤️">{t("roadmap")}</SectionTitle>
                <ol className="space-y-3">
                  {rich.roadmap.map((step) => (
                    <li key={step.grade} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                        {step.grade}
                      </div>
                      <div className="flex-1 rounded-xl bg-background p-3">
                        <div className="text-xs font-semibold uppercase text-foreground/50">
                          {t("gradeLabel", { n: step.grade })}
                        </div>
                        <p className="mt-0.5 text-sm text-foreground/80">{step.milestone[locale]}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* 5. 12-month parent guide */}
              <Card>
                <SectionTitle icon="📅">{t("monthlyGuide")}</SectionTitle>
                <div className="space-y-2">
                  {rich.months.map((m) => (
                    <details key={m.month} className="rounded-xl border border-border p-3">
                      <summary className="cursor-pointer font-semibold">
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand">
                          {m.month}
                        </span>
                        {m.theme[locale]}
                      </summary>
                      <div className="mt-3 space-y-3 text-sm">
                        <div>
                          <div className="font-semibold text-brand">✅ {t("parentActions")}</div>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-foreground/75">
                            {m.actions.map((a, i) => (
                              <li key={i}>{a[locale]}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold text-accent">👀 {t("trackerQuestions")}</div>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-foreground/75">
                            {m.tracker.map((q, i) => (
                              <li key={i}>{q[locale]}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </Card>
            </>
          ) : (
            /* Baseline (type not yet richly authored) */
            <>
              <Card>
                <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
                  {t("baselineNote")}
                </p>
              </Card>
              <Card>
                <SectionTitle icon="⭐">{t("strengths")}</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {base.strengths.map((s) => (
                    <span key={s.en} className="rounded-full bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand">
                      {s[locale]}
                    </span>
                  ))}
                </div>
              </Card>
              <Card>
                <SectionTitle icon="💼">{t("careers")}</SectionTitle>
                <ul className="space-y-2">
                  {base.careers.map((career) => (
                    <li key={career.title.en} className="rounded-xl bg-background p-3">
                      <div className="font-semibold">{career.title[locale]}</div>
                      <div className="text-sm text-foreground/60">{career.why[locale]}</div>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <SectionTitle icon="📅">{t("plan")}</SectionTitle>
                <div className="space-y-2">
                  {base.plan.map((m) => (
                    <details key={m.month} className="rounded-xl border border-border p-3">
                      <summary className="cursor-pointer font-semibold">
                        {t("month", { n: m.month })}: {m.focus[locale]}
                      </summary>
                      <div className="mt-2 space-y-2 text-sm">
                        <div>
                          <div className="font-medium text-brand">{t("studentTasks")}</div>
                          <ul className="list-disc pl-5 text-foreground/70">
                            {m.studentTasks.map((task, i) => (
                              <li key={i}>{task[locale]}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium text-accent">{t("parentTasks")}</div>
                          <ul className="list-disc pl-5 text-foreground/70">
                            {m.parentTasks.map((task, i) => (
                              <li key={i}>{task[locale]}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </Card>
            </>
          )}

          <Link href="/dashboard/student" className="no-print block">
            <Button className="w-full">{c("continue")}</Button>
          </Link>
        </div>
      </PageShell>
    </>
  );
}
