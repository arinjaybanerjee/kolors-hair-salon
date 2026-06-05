"use client";

import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section className="bg-brand-black min-h-screen flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-pink/15 border border-brand-pink/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-pulse" />
            <span className="text-brand-pink text-sm font-medium">Ready to book?</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Give us a <span className="text-brand-pink italic">call</span>
          </h1>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            To book an appointment, please call us directly — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Phone card */}
        <div className="bg-brand-gray-soft border border-white/10 rounded-3xl p-8 md:p-12 text-center mb-8 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-brand-pink/15 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>

            <p className="text-white/50 text-sm uppercase tracking-widest mb-3 font-medium">
              Call for appointments
            </p>
            <a
              href="tel:+14702971191"
              className="font-display text-4xl md:text-5xl font-bold text-white hover:text-brand-pink transition-colors duration-200 block mb-8"
            >
              (470) 297-1191
            </a>

            <div className="flex items-center justify-center">
              <Button href="tel:+14702971191" size="lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call Now
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Monday</p>
                <p className="text-white text-sm font-medium">10 AM – 6 PM</p>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Tue – Fri</p>
                <p className="text-white text-sm font-medium">10 AM – 7 PM</p>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Saturday</p>
                <p className="text-white text-sm font-medium">10 AM – 6:30 PM</p>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Sunday</p>
                <p className="text-white text-sm font-medium">10 AM – 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-brand-gray-soft border border-white/10 rounded-3xl overflow-hidden">
          <iframe
            title="Kolors Hair Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.065832933038!2d-84.18446602396888!3d34.1702344731128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59b38cb9dbc7d%3A0xe8567e3c9d3f6967!2sKolors%20Beauty%20Salon%20%26%20Threading!5e0!3m2!1sen!2sus!4v1780549870401!5m2!1sen!2sus"
            className="w-full h-72 md:h-80"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-white font-semibold text-sm">Kolors Hair Salon</p>
              <p className="text-white/40 text-xs mt-0.5">5610 Bethelview Rd #800, Cumming, GA 30040</p>
            </div>
            <Button
              href="https://maps.google.com/maps?q=5610+Bethelview+Rd+%23800+Cumming+GA+30040"
              target="_blank"
              size="sm"
              variant="outline"
            >
              Get Directions
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
