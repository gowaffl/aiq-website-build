import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  lightMode?: boolean;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
  lightMode = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl md:text-5xl font-bold tracking-tight mb-2 ${
          lightMode ? "text-foreground" : "text-white"
        }`}
      >
        {prefix}
        {count.toFixed(decimals)}
        {suffix}
      </div>
      <div
        className={`text-sm font-medium uppercase tracking-widest ${
          lightMode ? "text-muted-foreground" : "text-white/60"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
