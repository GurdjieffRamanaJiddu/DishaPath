"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "@/lib/auth-context";
import { getParent, saveParentConsent } from "@/lib/repository";
import { useRouter } from "@/i18n/navigation";
import { GRADES, type Grade, type Locale } from "@/lib/types";
import AppHeader from "@/components/AppHeader";
import {
  Button,
  Card,
  ErrorText,
  Field,
  PageShell,
  TextInput,
} from "@/components/ui";

type Stage = "loading" | "consent" | "addChild" | "credentials";

interface Credentials {
  name: string;
  loginCode: string;
  pin: string;
}

export default function OnboardingPage() {
  const t = useTranslations("onboarding");
  const con = useTranslations("consent");
  const c = useTranslations("common");
  const locale = useLocale() as Locale;
  const { user, role, loading } = useAuth();
  const router = useRouter();

  const [stage, setStage] = useState<Stage>("loading");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Child form
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<Grade>(5);
  const [childLang, setChildLang] = useState<Locale>(locale);
  const [creds, setCreds] = useState<Credentials | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!user || role !== "parent") {
      router.replace("/login?role=parent");
      return;
    }
    getParent(user.uid).then((p) => {
      setStage(p?.consent?.given ? "addChild" : "consent");
    });
  }, [loading, user, role, router]);

  async function giveConsent() {
    if (!agreed) {
      setError(con("required"));
      return;
    }
    if (!user) return;
    setBusy(true);
    setError("");
    try {
      await saveParentConsent(user.uid, user.phoneNumber ?? "", locale);
      setStage("addChild");
    } catch {
      setError(c("errorGeneric"));
    } finally {
      setBusy(false);
    }
  }

  async function createChild() {
    if (!user) return;
    if (!name.trim()) {
      setError(c("errorGeneric"));
      return;
    }
    setBusy(true);
    setError("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/children", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: name.trim(), grade, language: childLang }),
      });
      if (!res.ok) {
        setError(c("errorGeneric"));
        return;
      }
      const data = await res.json();
      setCreds({ name: data.name, loginCode: data.loginCode, pin: data.pin });
      setStage("credentials");
    } catch {
      setError(c("errorGeneric"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <AppHeader />
      <PageShell>
        {stage === "loading" && <p className="text-center">{c("loading")}</p>}

        {stage === "consent" && (
          <Card className="space-y-4">
            <h1 className="text-xl font-bold">{con("title")}</h1>
            <p className="text-foreground/70">{con("intro")}</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/70">
              <li>{con("point1")}</li>
              <li>{con("point2")}</li>
              <li>{con("point3")}</li>
            </ul>
            <label className="flex items-start gap-3 rounded-xl bg-brand-soft p-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-5 w-5"
              />
              <span className="text-sm font-medium">{con("checkbox")}</span>
            </label>
            <ErrorText>{error}</ErrorText>
            <Button onClick={giveConsent} disabled={busy} className="w-full">
              {busy ? c("loading") : con("agree")}
            </Button>
          </Card>
        )}

        {stage === "addChild" && (
          <Card className="space-y-4">
            <div>
              <h1 className="text-xl font-bold">{t("title")}</h1>
              <p className="text-sm text-foreground/60">{t("subtitle")}</p>
            </div>
            <Field label={t("childNameLabel")}>
              <TextInput
                placeholder={t("childNamePlaceholder")}
                value={name}
                maxLength={40}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            <Field label={t("gradeLabel")}>
              <div className="flex gap-2">
                {GRADES.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGrade(g)}
                    className={`flex-1 rounded-xl border py-3 font-semibold transition ${
                      grade === g
                        ? "border-brand bg-brand text-white"
                        : "border-border bg-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </Field>
            <Field label={t("languageLabel")}>
              <div className="flex gap-2">
                {(["en", "hi"] as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setChildLang(l)}
                    className={`flex-1 rounded-xl border py-3 font-semibold transition ${
                      childLang === l
                        ? "border-brand bg-brand text-white"
                        : "border-border bg-white"
                    }`}
                  >
                    {l === "en" ? c("english") : c("hindi")}
                  </button>
                ))}
              </div>
            </Field>
            <ErrorText>{error}</ErrorText>
            <Button onClick={createChild} disabled={busy} className="w-full">
              {busy ? c("loading") : t("create")}
            </Button>
          </Card>
        )}

        {stage === "credentials" && creds && (
          <Card className="space-y-4 text-center">
            <h1 className="text-xl font-bold">{t("credentialsTitle")}</h1>
            <p className="text-sm text-foreground/70">{t("credentialsIntro")}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-soft p-4">
                <div className="text-xs font-semibold uppercase text-brand">
                  {t("loginCode")}
                </div>
                <div className="mt-1 text-2xl font-bold tracking-widest">
                  {creds.loginCode}
                </div>
              </div>
              <div className="rounded-xl bg-brand-soft p-4">
                <div className="text-xs font-semibold uppercase text-brand">
                  {t("pin")}
                </div>
                <div className="mt-1 text-2xl font-bold tracking-widest">
                  {creds.pin}
                </div>
              </div>
            </div>
            <Button
              onClick={() => router.push("/dashboard/parent")}
              className="w-full"
            >
              {t("goToDashboard")}
            </Button>
          </Card>
        )}
      </PageShell>
    </>
  );
}
