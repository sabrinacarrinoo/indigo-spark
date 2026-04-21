import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full blur-3xl transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, hsl(245 100% 62% / 0.18), hsl(285 90% 65% / 0.08) 40%, transparent 70%)",
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        }}
      />
    </div>
  );
};
