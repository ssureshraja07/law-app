import { useMounted } from "./Reveal";

// About / Services / Contact / Profile / Appointments ku common header (load aana udane animate aagum)
export default function PageHeader({ title, subtitle, image }) {
  const mounted = useMounted();
  const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-center md:py-20">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[2500ms] ease-out ${
              mounted ? "scale-100" : "scale-110"
            }`}
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </>
      )}

      <div className="relative mx-auto max-w-3xl px-4">
        <h1
          className={`font-serif text-4xl font-semibold text-white transition-all duration-1000 md:text-5xl ${ease} ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {title}
        </h1>
        <div
          className={`mx-auto mt-4 h-0.5 bg-amber-500 transition-all delay-300 duration-1000 ${ease} ${
            mounted ? "w-16" : "w-0"
          }`}
        />
        {subtitle && (
          <p
            className={`mt-4 text-slate-300 transition-all delay-500 duration-1000 ${ease} ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}