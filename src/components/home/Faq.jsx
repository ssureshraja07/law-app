import { useState } from "react";
import Reveal from "../Reveal";

const faqs = [
  { q: "Is the first consultation really free?", a: "Yes. Your first consultation is free. Fees for taking up the case are discussed openly before we start." },
  { q: "What documents should I bring?", a: "Bring your ID proof, any notices or court papers, agreements and a short written summary of your issue." },
  { q: "How long will my case take?", a: "It depends on the type of case and the court. We give you a realistic estimate after reviewing your documents." },
  { q: "Can I consult online?", a: "Yes. You can book an appointment for a phone or video call from the Appointments page." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <Reveal variant="up">
        <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((f, i) => (
          <Reveal key={f.q} variant="up" delay={i * 80}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-slate-900"
            >
              {f.q}
              <span className={`text-xl text-amber-600 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <p className="overflow-hidden pr-8 text-slate-600">
                <span className="block pb-5">{f.a}</span>
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}