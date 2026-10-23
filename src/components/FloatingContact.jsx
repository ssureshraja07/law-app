const PHONE = "919999999999"; // country code + number, real number maathunga

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-500"
      >
        WhatsApp
      </a>
      <a
        href={`tel:+${PHONE}`}
        className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700"
      >
        Call Now
      </a>
    </div>
  );
}