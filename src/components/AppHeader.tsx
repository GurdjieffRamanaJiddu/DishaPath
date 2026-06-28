"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useAuth } from "@/lib/auth-context";
import LanguageToggle from "./LanguageToggle";

export default function AppHeader() {
  const t = useTranslations("common");
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <span className="text-lg font-bold text-brand">{t("appName")}</span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          {user && (
            <button
              onClick={() => logout()}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 hover:bg-black/5"
            >
              {t("logout")}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
