import { Link } from "react-router-dom";
import { contact } from "../data/contactus";
import { lawyer } from "../data/lawyer";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/profile", label: "Profile" },
  { to: "/contact", label: "Contact Us" },
  { to: "/appointments", label: "Book Appointment" },
];

const socialIcons = {
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
};

const heading = "font-serif text-lg font-semibold text-white after:mt-3 after:block after:h-0.5 after:w-10 after:bg-amber-500";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. About */}
        <div>
          <h2 className={heading}>{lawyer.firm}</h2>
          <p className="mt-5 text-sm leading-relaxed">
            Trusted legal representation in criminal, civil, property and family matters. We give honest
            advice and prepare every case with care.
          </p>
          <p className="mt-4 text-xs text-slate-400">Enrollment No: {lawyer.enrollmentNo}</p>
        </div>

        {/* 2. Quick links */}
        <div>
          <h2 className={heading}>Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-amber-400 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Follow us */}
        <div>
          <h2 className={heading}>Follow Us</h2>
          <p className="mt-5 text-sm">Stay connected for legal updates and awareness posts.</p>
          <div className="mt-5 flex gap-3">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {socialIcons[s.label.toLowerCase()]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* 4. Address */}
        <div>
          <h2 className={heading}>Our Office</h2>
          <address className="mt-5 space-y-3 text-sm not-italic">
            <p>
              {contact.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p>
              <a href={contact.phoneLink} className="transition hover:text-amber-400">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="break-all transition hover:text-amber-400">
                {contact.email}
              </a>
            </p>
            <p className="text-slate-400">{contact.hours[0].day}: {contact.hours[0].time}</p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {lawyer.firm}. All rights reserved.
          </p>
          <p className="mx-auto mt-2 max-w-3xl">
            Disclaimer: This website is for informational purposes only and is not an advertisement or
            solicitation. Nothing here is legal advice. Please consult a lawyer for advice on your specific case.
          </p>
        </div>
      </div>
    </footer>
  );
}