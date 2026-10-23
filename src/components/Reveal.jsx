import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Animation venda nu OS setting la irundha direct ah kaattidum
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      // threshold 0 + bottom margin: element screen kulla 12% vandha udane trigger aagum
      // (periya elements kum, refresh pannumpothu fold la irukura elements kum work aagum)
      { threshold, rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}

// Page load aana pinnadi true aagum. Hero / Navbar / Page header madhiri
// "scroll illama thaanaa varanum" nu iruka elements ku use pannalam.
export function useMounted(delay = 60) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(id);
  }, [delay]);
  return mounted;
}

const hiddenState = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "-translate-x-20",
  right: "translate-x-20",
  zoom: "scale-90",
};

export default function Reveal({ variant = "up", delay = 0, className = "", children }) {
  const [ref, seen] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
        seen ? "translate-x-0 translate-y-0 scale-100 opacity-100" : `opacity-0 ${hiddenState[variant]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}