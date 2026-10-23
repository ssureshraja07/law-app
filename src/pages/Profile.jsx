import { Link } from "react-router-dom";
import Reveal, { useInView } from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import {
  lawyer,
  profileBanner_ as banner,
  profileIntro,
  expertise,
  career,
  education,
  practiceCourts,
  notableMatters,
  publications,
  awards,
  team,
  workSteps,
} from "../data/lawyer";
import { contact } from "../data/contactus";

function SectionTitle({ children }) {
  return (
    <h2 className="font-serif text-2xl font-semibold text-slate-900 after:mt-3 after:block after:h-0.5 after:w-12 after:bg-amber-500 md:text-3xl">
      {children}
    </h2>
  );
}

function Bar({ name, level, delay }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm font-medium text-slate-800">
        <span>{name}</span>
        <span className="text-amber-700">{level}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-amber-500 transition-all duration-[1500ms] ease-out"
          style={{ width: seen ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Profile() {
  const facts = [
    ["Enrollment No.", lawyer.enrollmentNo],
    ["Bar Council", lawyer.barCouncil],
    ["Experience", lawyer.experience],
    ["Languages", lawyer.languages],
    ["Office", lawyer.location],
  ];

  return (
    <>
      <PageHeader title="Profile" subtitle="The advocate and the team behind your case." image={banner} />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-3">
        {/* ---------- Sticky profile card ---------- */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal variant="left">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              <img src={lawyer.photo} alt={lawyer.name} className="h-96 w-full object-cover object-top" />
              <div className="p-6">
                <h2 className="font-serif text-2xl font-semibold text-slate-900">{lawyer.name}</h2>
                <p className="text-sm font-medium text-amber-700">{lawyer.designation}</p>

                <dl className="mt-5 divide-y divide-slate-100 text-sm">
                  {facts.map(([k, v]) => (
                    <div key={k} className="py-2.5">
                      <dt className="text-slate-500">{k}</dt>
                      <dd className="font-semibold text-slate-900">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 grid gap-3">
                  <Link
                    to="/appointments"
                    className="rounded-md bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-amber-600"
                  >
                    Book Appointment
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={contact.phoneLink}
                      className="rounded-md border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-800 transition hover:border-amber-500 hover:bg-amber-50"
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${contact.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-800 transition hover:border-green-600 hover:bg-green-50"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {contact.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 transition hover:bg-amber-100"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </aside>

        {/* ---------- Main content ---------- */}
        <div className="space-y-16 lg:col-span-2">
          {/* Who is he */}
          <section>
            <Reveal variant="right">
              <SectionTitle>{profileIntro.headline}</SectionTitle>
            </Reveal>
            {profileIntro.paragraphs.map((p, i) => (
              <Reveal key={i} variant="up" delay={100 * (i + 1)}>
                <p className="mt-5 leading-relaxed text-slate-600">{p}</p>
              </Reveal>
            ))}
            <Reveal variant="up" delay={300}>
              <blockquote className="mt-6 border-l-4 border-amber-500 bg-slate-50 py-4 pl-5 pr-4 font-serif text-lg italic text-slate-800">
                "{lawyer.quote}"
              </blockquote>
            </Reveal>
          </section>

          {/* Expertise */}
          <section>
            <Reveal variant="right">
              <SectionTitle>Areas of Expertise</SectionTitle>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {expertise.map((e, i) => (
                <Bar key={e.name} {...e} delay={i * 120} />
              ))}
            </div>
          </section>

          {/* Career */}
          <section>
            <Reveal variant="right">
              <SectionTitle>Professional Experience</SectionTitle>
            </Reveal>
            <ul className="mt-8 space-y-6 border-l-2 border-amber-300 pl-6">
              {career.map((c, i) => (
                <Reveal key={c.role} variant="up" delay={i * 120}>
                  <li className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-amber-500 ring-2 ring-amber-300" />
                    <p className="text-sm font-semibold text-amber-700">{c.period}</p>
                    <h3 className="font-semibold text-slate-900">{c.role}</h3>
                    <p className="text-sm text-slate-500">{c.org}</p>
                    <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* Education + courts */}
          <section className="grid gap-10 sm:grid-cols-2">
            <Reveal variant="left">
              <SectionTitle>Education</SectionTitle>
              <ul className="mt-6 space-y-4">
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
              <SectionTitle>Courts of Practice</SectionTitle>
              <ul className="mt-6 space-y-3">
                {practiceCourts.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* Notable matters */}
          <section>
            <Reveal variant="right">
              <SectionTitle>Notable Matters</SectionTitle>
              <p className="mt-3 text-sm text-slate-500">
                Client names and details are kept confidential. Past results do not guarantee a similar outcome.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {notableMatters.map((m, i) => (
                <Reveal key={m.title} variant="zoom" delay={i * 100}>
                  <div className="h-full rounded-lg border border-slate-200 border-t-4 border-t-amber-500 p-5">
                    <h3 className="font-serif text-lg font-semibold text-slate-900">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <Reveal variant="right">
              <SectionTitle>Articles, Talks & Workshops</SectionTitle>
            </Reveal>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {publications.map((p, i) => (
                <Reveal key={p.title} variant="up" delay={i * 100}>
                  <li className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                    <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-800">
                      {p.type}
                    </span>
                    <span className="font-medium text-slate-900">{p.title}</span>
                    <span className="text-sm text-slate-500">{p.where}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* Awards */}
          <section>
            <Reveal variant="right">
              <SectionTitle>Memberships & Recognition</SectionTitle>
            </Reveal>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {awards.map((a, i) => (
                <Reveal key={a} variant="up" delay={i * 80}>
                  <li className="flex h-full items-start gap-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    {a}
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* ---------- How we work ---------- */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal variant="up">
            <h2 className="text-center font-serif text-3xl font-semibold text-white md:text-4xl">How We Work</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 150}>
                <div className="h-full rounded-lg border border-slate-700 p-6">
                  <h3 className="font-serif text-lg font-semibold text-amber-400">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal variant="up">
          <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Meet the Team</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
            A team of dedicated advocates and associates working together on every case.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={i * 150}>
              <div className="group overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl">
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
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-slate-50 py-16 text-center">
        <Reveal variant="zoom" className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-slate-900">Want to speak with {lawyer.name}?</h2>
          <p className="mt-3 text-slate-600">Book a consultation and discuss your case in detail.</p>
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