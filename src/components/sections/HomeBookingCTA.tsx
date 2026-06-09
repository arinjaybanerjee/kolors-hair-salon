import Button from "@/components/ui/Button";

export default function HomeBookingCTA() {
  return (
    <section className="bg-brand-gray-soft py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative element */}
        <div className="w-16 h-1 bg-brand-pink rounded-full mx-auto mb-8" />

        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-black mb-4">
          Ready for a <span className="text-brand-pink italic">new look?</span>
        </h2>
        <p className="text-brand-black/60 text-lg mb-10 max-w-xl mx-auto">
          Book your appointment online in minutes. Choose your service, pick a
          time, and we&apos;ll take care of the rest.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/booking" size="lg">
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
            Book an Appointment
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>

        <p className="text-brand-black/40 text-sm mt-6">
          Appointments preferred · Mon–Fri 10am–7pm · Sat 10am–6:30pm · Sun 10am–6pm
        </p>
      </div>
    </section>
  );
}
