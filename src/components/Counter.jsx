import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

export default function Counter({ end, suffix = "+", duration = 2000 }) {
  const [ref, seen] = useInView(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    let raf;
    let start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.floor(end * (1 - Math.pow(1 - p, 3)))); // ease-out
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}