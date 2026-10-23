import Reveal from "../Reveal";

// Dummy reviews, real client permission-oda later maathunga
const reviews = [
  { name: "Client Name", place: "Madurai", text: "They explained every step of my property case clearly and kept me updated after each hearing." },
  { name: "Client Name", place: "Chennai", text: "Very professional and approachable. I got proper guidance from the first consultation itself." },
  { name: "Client Name", place: "Coimbatore", text: "My family matter was handled with care and patience. I am grateful for their support." },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal variant="up">
          <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
            What Our Clients Say
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} variant={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 120}>
              <figure className="h-full rounded-lg bg-white p-6 shadow-sm">
                <blockquote className="leading-relaxed text-slate-700">"{r.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-amber-400">
                    {r.name[0]}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-slate-900">{r.name}</span>
                    <span className="text-slate-500">{r.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}