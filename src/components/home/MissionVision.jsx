import Reveal from "../Reveal";

import law3 from "../../images/home-law3.png";
import law2 from "../../images/home-law3.png";


export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl space-y-20 px-4">
        {/* Mission: image left, text right */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal variant="left">
            <img src={law2} alt="Our mission" className="w-full rounded-lg object-cover shadow-lg" />
          </Reveal>
          <Reveal variant="right" delay={150}>
            <h2 className="font-serif text-3xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              To make quality legal help accessible to everyone by giving honest advice, fighting for our
              clients' rights and keeping them informed at every step.
            </p>
          </Reveal>
        </div>

        {/* Vision: text left, image right */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal variant="left" delay={150} className="order-2 md:order-1">
            <h2 className="font-serif text-3xl font-semibold text-slate-900">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              To be the most trusted law practice in our region, known for integrity, results and a
              client-first approach.
            </p>
          </Reveal>
          <Reveal variant="right" className="order-1 md:order-2">
            <img src={law3} alt="Our vision" className="w-full rounded-lg object-cover shadow-lg" />
          </Reveal>
        </div>

        {/* Motto: zoom in */}
        <Reveal variant="zoom">
          <div
            className="relative overflow-hidden rounded-lg bg-slate-900 bg-cover bg-center px-6 py-16 text-center"
            style={{ backgroundImage: "url(/images/motto.png)" }}
          >
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative">
              <h2 className="font-serif text-2xl font-semibold text-amber-400">Our Motto</h2>
              <p className="mx-auto mt-4 max-w-2xl font-serif text-2xl text-white md:text-3xl">
                "Truth, Trust and Timely Justice."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}