import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CtaBanner() {
  return (
    <section
      className="relative bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/cta.png)" }}
    >
      <div className="absolute inset-0 bg-slate-950/75" />
      <Reveal variant="zoom" className="relative mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">Need legal advice? Let's talk.</h2>
        <p className="mt-4 text-slate-200">Book an appointment and tell us about your case.</p>
        <Link
          to="/appointments"
          className="mt-8 inline-block rounded-md bg-amber-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          Book Appointment
        </Link>
      </Reveal>
    </section>
  );
}