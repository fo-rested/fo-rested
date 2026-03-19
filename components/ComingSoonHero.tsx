import SceneDecoration from "./SceneDecoration";

export default function ComingSoonHero() {
  return (
    <main className="relative h-screen overflow-hidden bg-cream">
      {/* ── Background decoration ───────────────────────────────────────────── */}
      <SceneDecoration />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8">
        {/* Brand mark — rises through overflow mask, then shimmer sweeps once */}
        <div className="relative">
          <h1 className="fo-brand font-display text-[clamp(3.8rem,9vw,9rem)] font-normal italic tracking-[0.04em] text-ink leading-[1.05]">
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
          <p className="fo-text font-body text-base lg:text-3xl font-light tracking-[0.025em] leading-[1.9] text-ink max-w-[33ch] text-center">
            Strona w budowie. Wkrótce pokażemy,
            <br />
            jak drewno staje się produktem.
          </p>
        </div>

        {/* Secondary descriptor */}
        <div className="overflow-hidden mt-7">
          <p className="fo-label font-body text-xs lg:text-base tracking-[0.28em] uppercase text-wood-dark">
            Suszenie, obróbka, produkcja
          </p>
        </div>
      </div>

      {/* ── Kontakt — bottom right ─────────────────────────────────────────── */}
      <div className="absolute right-0 bottom-0 z-10 overflow-hidden p-edge">
        <a
          href="mailto:kontakt@fo-rested.pl"
          className="kontakt-link fo-footer font-body inline-block text-md font-light tracking-[0.22em] uppercase"
        >
          Kontakt
        </a>
      </div>

      {/* ── Year — bottom left ─────────────────────────────────────────────── */}
      <div className="absolute left-0 bottom-0 z-10 overflow-hidden p-edge">
        <span className="fo-footer font-body inline-block text-[0.5rem] lg:text-xs font-light tracking-[0.18em] uppercase text-wood">
          © 2026 fo-rested
          <div>· dev by Niezdem · </div>
        </span>
      </div>
    </main>
  );
}
