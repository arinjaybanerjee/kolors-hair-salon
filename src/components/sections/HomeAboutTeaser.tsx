import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const HIGHLIGHTS = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "5★", label: "Average Rating" },
  { value: "2", label: "Expert Stylists" },
];

export default function HomeAboutTeaser() {
  return (
    <section className="bg-brand-pink-pale py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="About Kolors"
              subtitle="A passion for beauty, a commitment to you."
              light
              centered={false}
            />
            <p className="text-brand-black/70 leading-relaxed mb-6">
              Founded with a simple belief — everyone deserves to feel beautiful
              and confident. We bring skill, care, and artistry to every
              appointment, specializing in all hair types and skin tones.
            </p>
            <p className="text-brand-black/70 leading-relaxed mb-8">
              From precision haircuts and vibrant color transformations to
              expertly threaded brows, our warm and welcoming studio is your
              home away from home.
            </p>
            <Button href="/about">Learn More About Us</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="bg-brand-black rounded-2xl p-6 text-center"
              >
                <div className="font-display text-3xl font-bold text-brand-pink mb-1">
                  {item.value}
                </div>
                <div className="text-white/50 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
