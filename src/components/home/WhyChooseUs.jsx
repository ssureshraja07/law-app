import Reveal from "../Reveal";

const points = [
  { title: "Experienced Advocates", text: "Years of practice across district courts and the High Court." },
  { title: "Transparent Fees", text: "We explain the cost upfront, so there are no surprises later." },
  { title: "Regular Case Updates", text: "You get a call or message after every hearing." },
  { title: "Tamil & English Support", text: "Discuss your case in the language you are comfortable with." },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal variant="up">
        <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Why Choose Us</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal key={p.title} variant={i % 2 ? "down" : "up"} delay={i * 120}>
            <div className="h-full rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}