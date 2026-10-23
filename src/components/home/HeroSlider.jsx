import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMounted } from "../Reveal";

import law1 from "../../images/home-law.png";
import law2 from "../../images/home-law2.png";
import law3 from "../../images/home-law3.png";

const slides = [
  {
    img: law1,
    title: "Justice You Can Trust",
    text: "Experienced legal representation in criminal, civil and property matters.",
  },
  {
    img: law2,
    title: "Your Rights. Our Priority.",
    text: "Clear advice and strong advocacy at every stage of your case.",
  },
  {
    img: law3,
    title: "Talk to Us. First Consultation is Free.",
    text: "Share your case details and get honest guidance, no obligation.",
  },
];

const INTERVAL = 5000; // 5 seconds
const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function HeroSlider() {
  const [state, setState] = useState({ current: 0, prev: null });
  const [paused, setPaused] = useState(false);
  const mounted = useMounted(); // refresh pannumpothu first slide content animate aaga
  const { current, prev } = state;

  const goTo = useCallback(
    (i) => setState((s) => (i === s.current ? s : { current: i, prev: s.current })),
    []
  );

  // 5 seconds once auto change
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => goTo((current + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [current, paused, goTo]);

  return (
    <section
      className="relative h-[calc(100vh-5rem)] min-h-[520px] md:h-[calc(100vh-7.5rem)] w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => {
        const active = i === current;
        const show = active && mounted; // content kaattalaama?
        const pos = active
          ? "translate-y-0 transition-transform duration-1000 ease-in-out"
          : i === prev
          ? "translate-y-full transition-transform duration-1000 ease-in-out"
          : "-translate-y-full";

        // title -> text -> buttons stagger
        const item = (delay) => ({
          style: { transitionDelay: show ? `${delay}ms` : "0ms" },
          className: `transition-all duration-1000 ${ease} ${
            show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`,
        });

        return (
          <div key={i} className={`absolute inset-0 ${active ? "z-10" : "z-0"} ${pos}`} aria-hidden={!active}>
            {/* slow zoom-out */}
            <img
              src={s.img}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out ${
                show ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-slate-900/10" />

            <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
              <div className="max-w-xl">
                <h1
                  {...item(400)}
                  className={`font-serif text-4xl font-semibold leading-tight text-white md:text-6xl ${item(400).className}`}
                >
                  {s.title}
                </h1>
                <p {...item(650)} className={`mt-5 max-w-md text-lg text-slate-200 ${item(650).className}`}>
                  {s.text}
                </p>
                <div {...item(900)} className={`mt-8 flex flex-wrap gap-3 ${item(900).className}`}>
                  <Link
                    to="/appointments"
                    className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    to="/services"
                    className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* vertical dots */}
      <div
        className={`absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 transition-opacity delay-1000 duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 rounded-full transition-all ${
              i === current ? "h-8 bg-amber-500" : "h-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}