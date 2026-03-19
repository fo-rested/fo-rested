import SceneDecoration from "./SceneDecoration";

export default function ComingSoonHero() {
  return (
    <main className="relative min-h-svh flex flex-col bg-cream">
      {/* ── Background decoration (absolute, растягивается вместе с main) ────── */}
      <SceneDecoration />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 py-16">
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

      {/* ── Footer row ─────────────── */}
      <div className="relative z-10 flex justify-between items-end p-edge lg:sticky lg:bottom-0">
        {/* Year — left */}
        <div className="overflow-hidden">
          <span className="fo-footer font-body inline-block text-[0.5rem] lg:text-xs font-light tracking-[0.18em] uppercase text-wood">
            © 2026 fo-rested
            <div>· dev by Niezdem · </div>
          </span>
        </div>

        {/* Kontakt — right */}
        <div className="overflow-hidden">
          <a
            href="mailto:kontakt@fo-rested.pl"
            className="kontakt-link fo-footer font-body inline-block text-md font-light tracking-[0.22em] uppercase"
          >
            Kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
