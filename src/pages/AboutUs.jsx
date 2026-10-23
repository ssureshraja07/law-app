import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import Counter from "../components/Counter";
import {
  lawyer,
  education,
  practiceCourts,
  timeline,
  values,
  awards,
  team,
} from "../data/lawyer";

export default function AboutUs() {
  return (
    <>
      {/* Header */}
      <PageHeader title="About Us" subtitle="Know the advocate who will stand by your case and problem." image={lawyer.photo} />

      {/* Lawyer intro */}
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 lg:grid-cols-5">
        <Reveal variant="left" className="lg:col-span-2">
          <div className="relative">
            <img
              src={lawyer.photo}
              alt={lawyer.name}
              className="w-full rounded-lg object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-md bg-slate-900 px-5 py-4 text-center shadow-lg">
              <p className="font-serif text-lg font-semibold text-white">{lawyer.name}</p>
              <p className="text-sm text-amber-400">{lawyer.designation}</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-3 lg:pt-4">
          <Reveal variant="right">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">{lawyer.firm}</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Experienced. Approachable. Dedicated.
            </h2>
          </Reveal>

          {lawyer.bio.map((p, i) => (
            <Reveal key={i} variant="right" delay={120 * (i + 1)}>
              <p className="mt-5 leading-relaxed text-slate-600">{p}</p>
            </Reveal>
          ))}

          <Reveal variant="up" delay={300}>
            <blockquote className="mt-6 border-l-4 border-amber-500 pl-4 font-serif text-lg italic text-slate-800">
              "{lawyer.quote}"
            </blockquote>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <dl className="mt-8 grid gap-4 rounded-lg bg-slate-50 p-6 text-sm sm:grid-cols-2">
              {[
                ["Enrollment No.", lawyer.enrollmentNo],
                ["Bar Council", lawyer.barCouncil],
                ["Experience", lawyer.experience],
                ["Languages", lawyer.languages],
                ["Office", lawyer.location],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="font-semibold text-slate-900">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-slate-900 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
          {[
            { end: 15, label: "Years of Practice" },
            { end: 4000, label: "Cases Handled" },
            { end: 25, label: "Team Members" },
            { end: 2500, label: "Free Consultations" },
          ].map((s, i) => (
            <Reveal key={s.label} variant="zoom" delay={i * 120}>
              <div className="font-serif text-4xl font-semibold text-amber-400">
                <Counter end={s.end} />
              </div>
              <p className="mt-2 text-sm text-slate-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      

      {/* Education + Courts */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <Reveal variant="left">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">Education & Qualifications</h2>
            <ul className="mt-6 space-y-5">
              {education.map((e) => (
                <li key={e.title} className="border-l-4 border-amber-500 pl-4">
                  <p className="font-semibold text-slate-900">{e.title}</p>
                  <p className="text-sm text-slate-600">
                    {e.place} &middot; {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">Courts of Practice</h2>
            <ul className="mt-6 space-y-3">
              {practiceCourts.map((c) => (
                <li key={c} className="flex items-center gap-3 text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  {c}
                </li>
              ))}
            </ul>
            <img
              src={lawyer.officePhoto}
              alt="Our office"
              className="mt-8 h-48 w-full rounded-lg object-cover shadow-md"
            />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal variant="up">
          <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Our Values</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} variant={i % 2 ? "down" : "up"} delay={i * 120}>
              <div className="h-full rounded-lg border border-slate-200 border-t-4 border-t-amber-500 p-6">
                <h3 className="font-serif text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal variant="up">
            <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Our Team</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} variant="up" delay={i * 150}>
                <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-xl">
                  <div className="overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif text-lg font-semibold text-slate-900">{m.name}</h3>
                    <p className="text-sm text-amber-700">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <Reveal variant="up">
          <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
            Memberships & Recognition
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {awards.map((a, i) => (
            <Reveal key={a} variant={i % 2 ? "right" : "left"} delay={i * 80}>
              <li className="flex h-full items-start gap-3 rounded-lg border border-slate-200 p-4 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                {a}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-center">
        <Reveal variant="zoom" className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-white">Let's discuss your case</h2>
          <p className="mt-3 text-slate-300">Book an appointment and get clear legal guidance.</p>
          <Link
            to="/appointments"
            className="mt-6 inline-block rounded-md bg-amber-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Book Appointment
          </Link>
        </Reveal>
      </section>
    </>
  );
}