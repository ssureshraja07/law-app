import { Link } from "react-router-dom";
import Reveal from "../Reveal";

import law3 from "../../images/home-law3.png";


const areas = [
  { title: "Criminal Law", text: "Bail, defence and appeals in all courts." },
  { title: "Civil Litigation", text: "Suits, injunctions and dispute resolution." },
  { title: "Property & Land", text: "Title checks, registration and land disputes." },
  { title: "Family & Divorce", text: "Divorce, maintenance, custody and wills." },
  { title: "Corporate & Business", text: "Agreements, company law and compliance." },
  { title: "Cheque Bounce & Recovery", text: "Notices, complaints and money recovery." },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
      <Reveal variant="left">
        <img
          src={law3}
          alt="Our legal practice"
          className="h-[460px] w-full rounded-lg object-cover shadow-xl"
        />
      </Reveal>

      <div>
        <Reveal variant="right">
          <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">What We Do</h2>
          <p className="mt-3 max-w-lg text-slate-600">
            We handle a wide range of legal matters with careful preparation and honest advice.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {areas.map((a, i) => (
            <Reveal key={a.title} variant="up" delay={i * 100}>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={300}>
          <Link to="/services" className="mt-8 inline-block font-semibold text-amber-700 hover:text-amber-600">
            View all services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}