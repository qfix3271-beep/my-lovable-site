import { useMemo } from "react";

export function Snowfall({ count = 60 }: { count?: number }) {
  const flakes = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            filter: "blur(0.5px)",
            boxShadow: "0 0 6px rgba(0, 207, 255, 0.6)",
            animation: `snowfall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
