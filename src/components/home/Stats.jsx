import Reveal from "../Reveal";
import Counter from "../Counter";

// Dummy numbers, real values later maathunga
const stats = [
  { end: 4000, label: "Cases We Won" },
  { end: 25, label: "Lawyers in Our Team" },
  { end: 2500, label: "Free Consultations" },
  { end: 15, label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} variant="zoom" delay={i * 150}>
            <div className="font-serif text-4xl font-semibold text-amber-400 md:text-5xl">
              <Counter end={s.end} />
            </div>
            <p className="mt-2 text-sm font-medium text-slate-300 md:text-base">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}