import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[2] h-[400px] w-[400px] rounded-full transition-opacity duration-300"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, oklch(0.85 0.18 210 / 0.18) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
