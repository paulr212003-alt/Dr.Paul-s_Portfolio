"use client";

import { useEffect, useState } from "react";

const sliceColors = [
  "rgb(var(--color-accent))",
  "rgb(var(--color-secondary))",
  "rgb(var(--color-border))",
  "rgb(var(--color-accent))",
  "rgb(var(--color-secondary))"
];

export default function SkillPie({ data }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <svg
          viewBox="0 0 32 32"
          className={`h-44 w-44 transition duration-700 sm:h-52 sm:w-52 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          {data.map((slice, index) => {
            const value = (slice.value / total) * 100;
            const offset = cumulative;
            cumulative += value;

            return (
              <circle
                key={slice.label}
                r="16"
                cx="16"
                cy="16"
                fill="transparent"
                stroke={sliceColors[index % sliceColors.length]}
                strokeOpacity={index === 2 ? 0.78 : 1}
                strokeWidth="32"
                strokeDasharray={`${value} ${100 - value}`}
                strokeDashoffset={-offset}
                pathLength="100"
                transform="rotate(-90 16 16)"
              />
            );
          })}
        </svg>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-[1.1rem] border border-border/70 bg-surface-soft/65 px-4 py-3"
          >
            <span
              className="h-3.5 w-3.5 rounded-full"
              style={{
                backgroundColor: sliceColors[index % sliceColors.length]
              }}
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-text">
                {item.label}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                {item.value}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
