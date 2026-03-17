export default function ComingSoonHero() {
  return (
    <main className="relative h-screen overflow-hidden bg-cream">
      {/* ── Ambient light ──────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="fo-blob-warm" />
        <div className="fo-blob-cool" />
      </div>

      {/* ── Plank tone bands ───────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="fo-plank-bands absolute inset-0 z-0 pointer-events-none"
      />

      {/* ── Wood cross-section rings ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="fo-rings"
        >
          {[
            [470, 0.05, 0.5],
            [400, 0.062, 0.5],
            [335, 0.072, 0.55],
            [278, 0.082, 0.6],
            [225, 0.09, 0.65],
            [178, 0.096, 0.7],
            [135, 0.102, 0.72],
            [96, 0.108, 0.74],
            [62, 0.112, 0.76],
            [33, 0.116, 0.78],
            [12, 0.12, 0.8],
          ].map(([r, opacity, sw], i) => (
            <circle
              key={i}
              cx="250"
              cy="250"
              r={r}
              fill="none"
              stroke="#9E7540"
              strokeWidth={sw}
              opacity={opacity}
            />
          ))}
          <circle cx="250" cy="250" r="3.5" fill="#9E7540" opacity="0.09" />
        </svg>
      </div>

      {/* ── Film grain ─────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="fo-grain absolute inset-0 z-0 pointer-events-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <filter id="fo-grain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.66 0.73"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect
            width="100%"
            height="100%"
            filter="url(#fo-grain)"
            opacity="1"
          />
        </svg>
      </div>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8">
        {/* Brand mark — rises through overflow mask, then shimmer sweeps once */}
        <div className="relative">
          <h1 className="fo-brand font-[family-name:var(--font-display)] text-[clamp(3.8rem,9vw,9rem)] font-normal italic tracking-[0.04em] text-ink leading-[1.05]">
            Fo-Rested
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
          <p className="fo-text font-[family-name:var(--font-main)] text-base lg:text-3xl font-light tracking-[0.025em] leading-[1.9] text-ink max-w-[33ch] text-center">
            Strona w budowie. Wkrótce pokażemy,
            <br />
            jak drewno staje się produktem.
          </p>
        </div>

        {/* Secondary descriptor */}
        <div className="overflow-hidden mt-7">
          <p className="fo-label font-[family-name:var(--font-main)] text-xs lg:text-base tracking-[0.28em] uppercase text-wood-dark">
            Suszenie, obróbka, produkcja
          </p>
        </div>
      </div>

      {/* ── Kontakt — bottom right ─────────────────────────────────────────── */}
      <div className="absolute right-0 bottom-0 z-10 overflow-hidden p-[clamp(1.5rem,3vw,2.5rem)]">
        <a
          href="mailto:kontakt@fo-rested.pl"
          className="kontakt-link fo-footer font-[family-name:var(--font-main)] inline-block text-md font-light tracking-[0.22em] uppercase"
        >
          Kontakt
        </a>
      </div>

      {/* ── Year — bottom left ─────────────────────────────────────────────── */}
      <div className="absolute left-0 bottom-0 z-10 overflow-hidden p-[clamp(1.5rem,3vw,2.5rem)]">
        <span className="fo-footer font-[family-name:var(--font-main)] inline-block text-[0.5rem] lg:text-xs font-light tracking-[0.18em] uppercase text-wood">
          © 2026 fo-rested
          <div>· dev by Niezdem · </div>
        </span>
      </div>
    </main>
  );
}
