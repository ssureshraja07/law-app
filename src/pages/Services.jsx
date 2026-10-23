import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import { categories, services } from "../data/services";
import {
  lawyer,
  education,
  practiceCourts,
  timeline,
  values,
  awards,
  team,
} from "../data/lawyer";

export default function Services() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter(
      (s) =>
        (active === "All" || s.category === active) &&
        (!q || s.title.toLowerCase().includes(q) || s.text.toLowerCase().includes(q))
    );
  }, [active, query]);

  return (
    <>
      {/* Page header */}
      <PageHeader
        title="Our Services"
        subtitle="Complete legal support across courts, from first advice to final judgment."
        image={lawyer.photo}
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Search + category filter */}
        <div className="flex flex-col gap-5">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a service (bail, divorce, property...)"
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 md:max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === c
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-slate-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-slate-500">
            Intha service kedaikala. Vera word la search pannunga, illa direct ah contact pannunga.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col rounded-lg border border-slate-200 border-t-4 border-t-amber-500 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    {s.category}
                  </span>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-slate-900">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>

                  <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/appointments"
                    className="mt-6 inline-block pt-2 text-sm font-semibold text-slate-900 transition group-hover:text-amber-700"
                  >
                    Consult for this case &rarr;
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 text-center">
        <Reveal variant="zoom" className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-slate-900">Your case not listed?</h2>
          <p className="mt-3 text-slate-600">
            We handle many more matters. Tell us about your problem and we will guide you.
          </p>
          <Link
            to="/appointments"
            className="mt-6 inline-block rounded-md bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Book Appointment
          </Link>
        </Reveal>
      </section>
    </>
  );
}