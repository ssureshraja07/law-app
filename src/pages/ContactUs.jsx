import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import { contact } from "../data/contactus";
import { categories } from "../data/services";

const icons = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
};

function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

const caseTypes = categories.filter((c) => c !== "All");

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", caseType: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: Spring Boot API ready aana pinnadi inga call pannunga:
      // await fetch("http://localhost:8080/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 800)); // dummy delay
      setStatus("sent");
      setForm({ name: "", phone: "", email: "", caseType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

  const infoCards = [
    { icon: "phone", title: "Call Us", lines: [contact.phone], href: contact.phoneLink },
    {
      icon: "chat",
      title: "WhatsApp",
      lines: ["Chat with us directly"],
      href: `https://wa.me/${contact.whatsappNumber}`,
    },
    { icon: "mail", title: "Email", lines: [contact.email], href: `mailto:${contact.email}` },
    { icon: "pin", title: "Visit Office", lines: contact.addressLines, href: contact.mapLink },
  ];

  return (
    <>
      {/* Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Have a legal question? Reach out and we will get back to you soon."
        image={contact.bannerImg}
      />

      {/* Info cards */}
      <section className="mx-auto -mt-10 max-w-6xl px-4">
        <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => (
            <Reveal key={c.title} variant="up" delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col items-center rounded-lg border-t-4 border-amber-500 bg-white p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-slate-900">
                  <Icon name={c.icon} />
                </span>
                <h2 className="mt-4 font-serif text-lg font-semibold text-slate-900">{c.title}</h2>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-slate-600">
                    {l}
                  </p>
                ))}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + side info */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-5">
        <Reveal variant="left" className="lg:col-span-3">
          <h2 className="font-serif text-3xl font-semibold text-slate-900">Send Us a Message</h2>
          <p className="mt-2 text-slate-600">Fill in the form and our team will contact you.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Full Name *
                <input required name="name" value={form.name} onChange={onChange} className={field} placeholder="Your name" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Phone Number *
                <input
                  required
                  name="phone"
                  type="tel"
                  pattern="[0-9+\s-]{10,15}"
                  value={form.phone}
                  onChange={onChange}
                  className={field}
                  placeholder="10 digit mobile number"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Email
                <input name="email" type="email" value={form.email} onChange={onChange} className={field} placeholder="you@example.com" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Type of Case
                <select name="caseType" value={form.caseType} onChange={onChange} className={field}>
                  <option value="">Select</option>
                  {caseTypes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-700">
              Message *
              <textarea
                required
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                className={field}
                placeholder="Briefly describe your legal issue"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-amber-600 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p role="status" className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-800">
                Thank you! Your message has been sent. We will contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">
                Something went wrong. Please call or WhatsApp us directly.
              </p>
            )}

            <p className="text-xs text-slate-500">
              Please do not share confidential or sensitive case details through this form. Sending a message
              does not create a lawyer-client relationship.
            </p>
          </form>
        </Reveal>

        <Reveal variant="right" className="lg:col-span-2">
          <img src={contact.officeImg} alt="Our office" className="h-56 w-full rounded-lg object-cover shadow-md" />

          <div className="mt-8 rounded-lg bg-slate-50 p-6">
            <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-slate-900">
              <Icon name="clock" className="h-5 w-5 text-amber-600" /> Working Hours
            </h3>
            <ul className="mt-4 divide-y divide-slate-200 text-sm">
              {contact.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 py-2.5">
                  <span className="text-slate-600">{h.day}</span>
                  <span className="font-medium text-slate-900">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-lg font-semibold text-slate-900">Follow Us</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-700 transition hover:border-amber-500 hover:bg-amber-50"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal variant="up">
            <h2 className="text-center font-serif text-3xl font-semibold text-slate-900">Find Our Office</h2>
            <p className="mt-2 text-center text-slate-600">{contact.addressLines.join(", ")}</p>
          </Reveal>
          <Reveal variant="zoom" className="mt-8">
            <iframe
              title="Office location"
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-96 w-full rounded-lg border-0 shadow-md"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-14 text-center">
        <Reveal variant="zoom" className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-white">Prefer a scheduled meeting?</h2>
          <p className="mt-3 text-slate-300">Book a time slot and meet us in person or online.</p>
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