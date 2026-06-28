"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AppHeader from "@/components/AppHeader";
import { Card, PageShell } from "@/components/ui";

export default function LandingPage() {
  const t = useTranslations("landing");
  const c = useTranslations("common");

  const points = [
    { icon: "✨", title: t("point1Title"), body: t("point1Body") },
    { icon: "🎯", title: t("point2Title"), body: t("point2Body") },
    { icon: "📅", title: t("point3Title"), body: t("point3Body") },
  ];

  return (
    <>
      <AppHeader />
      <PageShell>
        <section className="py-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            {c("tagline")}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            {t("heroSubtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/login?role=parent"
              className="rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
            >
              {t("parentCta")}
            </Link>
            <Link
              href="/login?role=student"
              className="rounded-xl bg-brand-soft px-6 py-3 text-base font-semibold text-brand transition hover:bg-indigo-100"
            >
              {t("studentCta")}
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {points.map((p) => (
            <Card key={p.title} className="text-center">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-2 font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{p.body}</p>
            </Card>
          ))}
        </section>
      </PageShell>
    </>
  );
}
