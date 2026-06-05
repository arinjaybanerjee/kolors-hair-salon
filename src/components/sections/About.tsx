import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const VALUES = [
  "Premium, professional-grade products only",
  "Inclusive styling for all hair types & textures",
  "Hygiene-first threading with fresh thread every time",
  "Welcoming environment for everyone",
  "Walk-ins always welcome",
  "Experienced stylists with 10+ years combined",
];

const TEAM = [
  { name: "Priya K.", role: "Lead Stylist & Owner", initials: "PK" },
  { name: "Meena S.", role: "Threading Specialist", initials: "MS" },
  { name: "Aisha R.", role: "Color Expert", initials: "AR" },
];

export default function About() {
  return (
    <section className="bg-brand-pink-pale py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <SectionHeading
              title="About Kolors"
              subtitle="A passion for beauty, a commitment to you."
              light
              centered={false}
            />

            <p className="text-brand-black/70 leading-relaxed mb-6">
              Kolors Hair Salon was founded with a simple belief: everyone
              deserves to feel beautiful and confident. Since opening our doors,
              we&apos;ve built a community where clients come not just for a
              service — but for an experience.
            </p>
            <p className="text-brand-black/70 leading-relaxed mb-8">
              From precision haircuts and vibrant color transformations to
              expertly threaded brows, our team brings skill, care, and artistry
              to every appointment. We specialize in all hair types and skin
              tones, so everyone truly is welcome here.
            </p>

            {/* Values */}
            <ul className="space-y-3 mb-8">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-brand-black/80 text-sm">{value}</span>
                </li>
              ))}
            </ul>

            <Button href="/contact">Meet Us — Book Today</Button>
          </div>

          {/* Visual side */}
          <div className="space-y-6">
            {/* Decorative card */}
            <div className="relative bg-brand-black rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl" />
              <h3 className="font-display text-white text-2xl font-bold mb-2 relative">
                10+ Years
              </h3>
              <p className="text-white/50 text-sm relative mb-6">
                of serving our community
              </p>
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl font-bold text-brand-pink">
                    500+
                  </div>
                  <div className="text-white/40 text-xs mt-1">Happy Clients</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl font-bold text-brand-pink">
                    5★
                  </div>
                  <div className="text-white/40 text-xs mt-1">Reviews</div>
                </div>
              </div>
            </div>

            {/* Team cards */}
            <div className="grid grid-cols-3 gap-3">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="bg-brand-black rounded-2xl p-4 text-center group hover:bg-brand-pink/10 transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center mx-auto mb-3 font-display font-bold text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all duration-200">
                    {member.initials}
                  </div>
                  <p className="text-white text-xs font-semibold">{member.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
