import { useTranslations } from "next-intl";
import { SceneDecoration } from "./SceneDecoration";

export function ComingSoonHero() {
  const t = useTranslations("comingSoon");

  return (
    <main className="relative flex min-h-screen flex-col bg-cream">
      {/* ── Background decoration (fixed, covers viewport always) ───────────── */}
      <SceneDecoration />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 py-20">
        {/* Brand mark — rises through overflow mask, then shimmer sweeps once */}
        <div className="relative overflow-hidden">
          <h1 className="fo-brand font-display px-8 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal italic tracking-[0.04em] text-ink leading-[1.05]">
            forested
          </h1>
          <div
            aria-hidden="true"
            className="fo-shimmer absolute inset-0 pointer-events-none"
          />
        </div>

        {/* Rule — grows from center */}
        <div className="fo-rule w-14 lg:w-40 h-px bg-wood mt-8 mb-8 origin-center" />

        {/* Main supporting text */}
        <div className="overflow-hidden">
          <p className="fo-text font-body text-base lg:text-3xl font-light tracking-[0.025em] leading-[1.9] text-ink max-w-[33ch] text-center whitespace-pre-line">
            {t("tagline")}
          </p>
        </div>

        {/* Secondary descriptor */}
        <div className="overflow-hidden mt-7">
          <p className="fo-label font-body text-xs lg:text-base tracking-[0.28em] uppercase text-wood-dark">
            {t("descriptor")}
          </p>
        </div>
      </div>

      {/* ── Footer row ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex items-end justify-between p-6 md:p-8 xl:p-10">
        <span className="fo-footer font-body text-[0.5rem] lg:text-xs font-light tracking-[0.18em] uppercase text-wood">
          © 2026 fo-rested
          <br />· dev by Niezdem ·
        </span>
        <a
          href="mailto:kontakt@fo-rested.pl"
          className="kontakt-link fo-footer font-body text-base font-light tracking-[0.22em] uppercase"
        >
          {t("contact")}
        </a>
      </div>
    </main>
  );
}
