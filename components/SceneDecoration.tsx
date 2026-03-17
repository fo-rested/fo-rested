const GOLDEN_ANGLE = 137.508 * (Math.PI / 180);

const PHYLLO_DOTS = Array.from({ length: 300 }, (_, i) => ({
  x: parseFloat(
    (250 + 13 * Math.sqrt(i + 1) * Math.cos(i * GOLDEN_ANGLE)).toFixed(1),
  ),
  y: parseFloat(
    (250 + 13 * Math.sqrt(i + 1) * Math.sin(i * GOLDEN_ANGLE)).toFixed(1),
  ),
  r: parseFloat((0.8 + (i % 20) * 0.1).toFixed(2)),
  opacity: parseFloat((0.01 + (i % 13) * 0.005).toFixed(3)),
}));

export default function SceneDecoration() {
  return (
    <>
      {/* Ambient light blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="fo-blob-warm" />
        <div className="fo-blob-cool" />
      </div>

      {/* Plank tone bands */}
      <div
        aria-hidden="true"
        className="fo-plank-bands absolute inset-0 z-0 pointer-events-none"
      />

      {/* Phyllotaxis pattern — golden angle spiral, centered */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="fo-phyllo w-screen h-screen"
        >
          {PHYLLO_DOTS.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill="#9E7540"
              opacity={d.opacity}
            />
          ))}
        </svg>
      </div>

      {/* Film grain */}
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
    </>
  );
}
