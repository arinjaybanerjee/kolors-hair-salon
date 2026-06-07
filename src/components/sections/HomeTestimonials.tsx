const TESTIMONIALS = [
  {
    id: 1,
    name: "Avni J.",
    text: "Anita has magic hands! I have always had amazing hair treatments and blowouts — especially curls!! Highly recommend.",
    service: "Hair Treatments & Blowout — Anita",
    initials: "AJ",
  },
  {
    id: 2,
    name: "Swapna P.",
    text: "Today I had a gold facial done by Anita — I 100% recommend her. She is so professional and experienced. Her massaging technique was awesome, worth every visit!",
    service: "Gold Facial — Anita",
    initials: "SP",
  },
  {
    id: 3,
    name: "Sahana A.",
    text: "Kalpana did an amazing job with my layers haircut. She really listened to what I wanted and shaped the layers perfectly. Very professional, patient, and skilled. I walked out feeling so happy with my hair!",
    service: "Haircut — Kalpana",
    initials: "SA",
  },
  {
    id: 4,
    name: "Jeevika G.",
    text: "We've been regular customers for eyebrow threading and haircuts at Kolors, and Kalpana aunty always does an amazing job. She's very neat, efficient, and friendly. We always leave happy with the results!",
    service: "Threading & Haircut — Kalpana",
    initials: "JG",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-brand-pink"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section className="bg-brand-gray-soft border-y border-brand-black/10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-pink text-sm font-semibold uppercase tracking-widest mb-2">
            What our clients say
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black">
            Loved by hundreds<span className="text-brand-pink">.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-brand-black/10 rounded-2xl p-6 flex flex-col hover:border-brand-pink/30 transition-colors duration-300"
            >
              <Stars />
              <p className="text-brand-black/70 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-black/10">
                <div className="w-9 h-9 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-brand-black text-sm font-semibold">{t.name}</p>
                  <p className="text-brand-black/40 text-xs">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-brand-black/50 text-sm">
            <span className="text-brand-black font-semibold">4.0</span> · 300+ reviews on Google
          </p>
        </div>
      </div>
    </section>
  );
}
