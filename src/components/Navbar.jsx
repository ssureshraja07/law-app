import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useMounted } from "./Reveal";
import SocialIcon from "./SocialIcon";
import { contact } from "../data/contactus";
import { lawyer } from "../data/lawyer";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/profile", label: "Profile" },
  { to: "/contact", label: "Contact Us" },
];

const iconPaths = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
};

function Ico({ name, className = "h-4 w-4" }) {
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
      {iconPaths[name]}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useMounted();
  const { pathname } = useLocation();

  // scroll pannina navbar chinna aagi shadow varum
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // page maarina mobile menu close aagum
  useEffect(() => setOpen(false), [pathname]);

  // load aana udane stagger fade-in
  const pop = (i) => ({
    style: { transitionDelay: `${200 + i * 90}ms` },
    className: `transition-all duration-700 ${mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`,
  });

  const desktopLink = ({ isActive }) =>
    `group relative py-2 text-[15px] font-medium tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-amber-500 after:transition-all after:duration-300 ${
      isActive
        ? "text-slate-950 after:w-full"
        : "text-slate-600 after:w-0 hover:text-slate-950 hover:after:w-full"
    }`;

  const mobileLink = ({ isActive }) =>
    `block rounded-md px-3 py-3 text-base font-medium transition-colors ${
      isActive ? "bg-amber-50 text-amber-800" : "text-slate-700 hover:bg-slate-50"
    }`;

  return (
    <>
      {/* ---------- Top info bar (desktop) ---------- */}
      <div
        className={`hidden bg-slate-950 text-xs text-slate-300 transition-opacity duration-700 md:block ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <a href={contact.phoneLink} className="flex items-center gap-2 transition hover:text-amber-400">
              <Ico name="phone" className="h-3.5 w-3.5 text-amber-500" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 transition hover:text-amber-400"
            >
              <Ico name="mail" className="h-3.5 w-3.5 text-amber-500" />
              {contact.email}
            </a>
            <span className="hidden items-center gap-2 lg:flex">
              <Ico name="clock" className="h-3.5 w-3.5 text-amber-500" />
              {contact.hours[0].day}: {contact.hours[0].time}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition hover:text-amber-400"
              >
                <SocialIcon name={s.label} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Main navbar ---------- */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-all duration-500 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        } ${mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            style={pop(0).style}
            className={`flex items-center gap-3 ${pop(0).className}`}
            aria-label={`${lawyer.name} home`}
          >
            <span
              className={`flex items-center justify-center rounded-lg bg-slate-900 text-amber-400 shadow-md transition-all duration-300 ${
                scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
            >
              {/* scales of justice */}
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v18" />
                <path d="M7 21h10" />
                <path d="M5 7h14" />
                <path d="M5 7l-3 7a3.5 3.5 0 0 0 7 0L5 7z" />
                <path d="M19 7l-3 7a3.5 3.5 0 0 0 7 0L19 7z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg font-semibold text-slate-900 sm:text-xl">
                {lawyer.name}
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-amber-700 sm:block">
                {lawyer.designation}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l, i) => (
              <li key={l.to} {...pop(i + 1)}>
                <NavLink to={l.to} end={l.to === "/"} className={desktopLink}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li {...pop(links.length + 1)}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg"
              >
                <Ico name="calendar" className="h-4 w-4" />
                Book Appointment
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-800 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* gold accent line */}
        <div className="h-0.5 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600" />

        {/* ---------- Mobile menu ---------- */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-1 border-t border-slate-100 bg-white px-4 py-3">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === "/"} className={mobileLink}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-3 font-semibold text-slate-950"
                >
                  <Ico name="calendar" className="h-4 w-4" />
                  Book Appointment
                </Link>
              </li>
              <li className="grid grid-cols-2 gap-3 pb-2 pt-1">
                <a
                  href={contact.phoneLink}
                  className="flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800"
                >
                  <Ico name="phone" className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}