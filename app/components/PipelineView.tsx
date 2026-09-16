"use client";
import { useEffect, useState } from "react";
import type { PipelineStep } from "../data";

interface Props {
  steps: PipelineStep[];
  onComplete: () => void;
}

export function PipelineView({ steps, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsed((e) => e + 0.1), 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (current >= steps.length) {
      onComplete();
      return;
    }
    const delay = 500 + Math.random() * 350;
    const timeout = setTimeout(() => setCurrent((c) => c + 1), delay);
    return () => clearTimeout(timeout);
  }, [current, steps.length, onComplete]);

  return (
    <div className="card fade-in">
      <div className="card-head">
        <span className="card-head-title">⚙️ Pipeline</span>
        <span className="badge b-en" style={{ fontFamily: "var(--mono)" }}>
          {elapsed.toFixed(1)}s
        </span>
      </div>
      <div className="pipe-wrap">
        {steps.map((step, i) => {
          const cls = i < current ? "done" : i === current ? "run" : "wait";
          return (
            <div className={`p-step ${cls}`} key={i}>
              <span className="p-dot">{i < current ? "✓" : step.icon}</span>
              <div className="p-info">
                <div className="p-name">{step.name}</div>
                <div className="p-sub">{step.sub}</div>
              </div>
              {i === current && <span className="p-time">running</span>}
              {i < current && <span className="p-time" style={{ color: "var(--gr)" }}>done</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
