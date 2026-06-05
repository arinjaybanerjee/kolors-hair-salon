const TESTIMONIALS = [
  {
    id: 1,
    name: "Samantha R.",
    text: "Absolutely love this place! My eyebrows have never looked this clean. Meena is incredibly precise and gentle.",
    service: "Eyebrow Threading",
    initials: "SR",
  },
  {
    id: 2,
    name: "Priya M.",
    text: "Got a balayage done and I'm obsessed. The color is so natural and the team really listened to what I wanted.",
    service: "Highlights / Balayage",
    initials: "PM",
  },
  {
    id: 3,
    name: "Jessica T.",
    text: "Best salon in the city. The vibe is so warm and welcoming, and my blowout lasted all week. I won't go anywhere else.",
    service: "Blowout & Style",
    initials: "JT",
  },
  {
    id: 4,
    name: "Anika D.",
    text: "Full face threading in under 20 minutes and the results were flawless. So quick, affordable, and painless!",
    service: "Full Face Threading",
    initials: "AD",
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
    <section className="bg-brand-gray-soft border-y border-white/10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-pink text-sm font-semibold uppercase tracking-widest mb-2">
            What our clients say
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Loved by hundreds<span className="text-brand-pink">.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-brand-black border border-white/10 rounded-2xl p-6 flex flex-col hover:border-brand-pink/30 transition-colors duration-300"
            >
              <Stars />
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.service}</p>
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
          <p className="text-white/50 text-sm">
            <span className="text-white font-semibold">4.0</span> · 300+ reviews on Google
          </p>
        </div>
      </div>
    </section>
  );
}
