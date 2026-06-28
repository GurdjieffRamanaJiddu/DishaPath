"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithCustomToken,
  type ConfirmationResult,
} from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { getParent } from "@/lib/repository";
import { useRouter } from "@/i18n/navigation";
import AppHeader from "@/components/AppHeader";
import {
  Button,
  Card,
  ErrorText,
  Field,
  PageShell,
  TextInput,
} from "@/components/ui";

type Tab = "parent" | "student";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const t = useTranslations("login");
  const c = useTranslations("common");
  const params = useSearchParams();
  const router = useRouter();

  const [tab, setTab] = useState<Tab>(
    params.get("role") === "student" ? "student" : "parent",
  );

  return (
    <>
      <AppHeader />
      <PageShell>
        <div className="mb-5 flex justify-center">
          <div className="inline-flex overflow-hidden rounded-full border border-border bg-white text-sm font-medium">
            <button
              onClick={() => setTab("parent")}
              className={`px-4 py-2 ${tab === "parent" ? "bg-brand text-white" : "text-foreground/70"}`}
            >
              {t("switchToParent")}
            </button>
            <button
              onClick={() => setTab("student")}
              className={`px-4 py-2 ${tab === "student" ? "bg-brand text-white" : "text-foreground/70"}`}
            >
              {t("switchToStudent")}
            </button>
          </div>
        </div>

        {tab === "parent" ? (
          <ParentLogin t={t} c={c} router={router} />
        ) : (
          <StudentLogin t={t} c={c} router={router} />
        )}
      </PageShell>
    </>
  );
}

function ParentLogin({
  t,
  c,
  router,
}: {
  t: ReturnType<typeof useTranslations>;
  c: ReturnType<typeof useTranslations>;
  router: ReturnType<typeof useRouter>;
}) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState<"phone" | "otp">("phone");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const confirmationRef = useRef<ConfirmationResult | null>(null);
  const verifierRef = useRef<RecaptchaVerifier | null>(null);

  useEffect(() => {
    return () => {
      verifierRef.current?.clear();
      verifierRef.current = null;
    };
  }, []);

  function getVerifier() {
    if (!verifierRef.current) {
      verifierRef.current = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
    }
    return verifierRef.current;
  }

  async function sendOtp() {
    setError("");
    if (!/^\d{10}$/.test(phone)) {
      setError(t("invalidPhone"));
      return;
    }
    setBusy(true);
    try {
      confirmationRef.current = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        getVerifier(),
      );
      setStage("otp");
      if (process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR) {
        console.log("[Dev] In emulator mode: OTP is bypassed. Enter any value and click Verify.");
      }
    } catch {
      setError(c("errorGeneric"));
    } finally {
      setBusy(false);
    }
  }

  async function verifyOtp() {
    setError("");
    setBusy(true);
    try {
      // In emulator, use custom token for parent login instead of OTP
      if (process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR && phone === "9876543210") {
        const res = await fetch("/api/parent-login-dev", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        if (!res.ok) {
          setError(t("invalidOtp"));
          return;
        }
        const data = await res.json();
        await signInWithCustomToken(auth, data.token);
        router.push("/dashboard/parent");
      } else {
        const cred = await confirmationRef.current!.confirm(otp);
        const parent = await getParent(cred.user.uid);
        if (parent?.consent?.given) {
          router.push("/dashboard/parent");
        } else {
          router.push("/onboarding");
        }
      }
    } catch {
      setError(t("invalidOtp"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card className="space-y-4">
      <h1 className="text-xl font-bold">{t("parentTitle")}</h1>
      {stage === "phone" ? (
        <>
          <Field label={t("phoneLabel")}>
            <div className="flex items-center gap-2">
              <span className="rounded-xl border border-border bg-brand-soft px-3 py-3 font-medium text-brand">
                +91
              </span>
              <TextInput
                inputMode="numeric"
                maxLength={10}
                placeholder={t("phonePlaceholder")}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              />
            </div>
          </Field>
          <ErrorText>{error}</ErrorText>
          <Button onClick={sendOtp} disabled={busy} className="w-full">
            {busy ? c("loading") : t("sendOtp")}
          </Button>
        </>
      ) : (
        <>
          <Field label={t("otpLabel")}>
            <TextInput
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <ErrorText>{error}</ErrorText>
          <Button onClick={verifyOtp} disabled={busy} className="w-full">
            {busy ? c("loading") : t("verify")}
          </Button>
          <button
            onClick={() => setStage("phone")}
            className="w-full text-sm text-foreground/60 hover:underline"
          >
            {t("resendOtp")}
          </button>
        </>
      )}
      <div id="recaptcha-container" />
    </Card>
  );
}

function StudentLogin({
  t,
  c,
  router,
}: {
  t: ReturnType<typeof useTranslations>;
  c: ReturnType<typeof useTranslations>;
  router: ReturnType<typeof useRouter>;
}) {
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function login() {
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/child-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loginCode: code, pin }),
      });
      if (!res.ok) {
        setError(t("invalidChild"));
        return;
      }
      const data = await res.json();
      await signInWithCustomToken(auth, data.token);
      router.push("/dashboard/student");
    } catch {
      setError(c("errorGeneric"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card className="space-y-4">
      <h1 className="text-xl font-bold">{t("studentTitle")}</h1>
      <Field label={t("childCodeLabel")}>
        <TextInput
          autoCapitalize="characters"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
        />
      </Field>
      <Field label={t("childPinLabel")}>
        <TextInput
          inputMode="numeric"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
        />
      </Field>
      <ErrorText>{error}</ErrorText>
      <Button onClick={login} disabled={busy} className="w-full">
        {busy ? c("loading") : t("childLogin")}
      </Button>
    </Card>
  );
}
