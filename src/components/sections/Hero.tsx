import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-brand-pink/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">

        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-brand-pink/20 blur-2xl rounded-full scale-110 pointer-events-none" />
            <Image
              src="/images/kolorslogo.png"
              alt="Kolors Beauty Salon & Threading"
              width={280}
              height={112}
              className="relative h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-brand-pink/15 border border-brand-pink/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-pulse" />
          <span className="text-brand-pink text-sm font-medium">
            Hair Salon & Threading Studio
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand-black mb-6 leading-tight animate-fade-up">
          Look Good,{" "}
          <span className="text-brand-pink italic">Feel Great</span>
        </h1>

        {/* Accent line */}
        <div className="w-24 h-1 bg-brand-pink rounded-full mx-auto mb-8 animate-fade-in" />

        {/* Subtext */}
        <p className="text-brand-black/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up">
          Premium hair styling and precision threading services in a warm,
          welcoming space. Walk in or book your appointment today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button href="/contact" size="lg">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Appointment
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "8+", label: "Years Experience" },
            { value: "4.0★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-brand-pink">
                {stat.value}
              </div>
              <div className="text-brand-black/40 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-brand-black/30 text-xs">Scroll</span>
        <svg
          className="w-4 h-4 text-brand-black/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
