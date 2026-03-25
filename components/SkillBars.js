"use client";

import { useEffect, useState } from "react";

export default function SkillBars({ data }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.label} className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-text">{item.label}</p>
            <p className="text-sm font-semibold text-accent">{item.value}%</p>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-surface-soft/80">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
              style={{ width: ready ? `${item.value}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
