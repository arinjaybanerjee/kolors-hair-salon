import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact & Booking", href: "/contact" },
];

const SERVICES_LIST = [
  "Women's Haircut",
  "Hair Coloring",
  "Highlights & Balayage",
  "Keratin Treatment",
  "Eyebrow Threading",
  "Full Face Threading",
];

export default function Footer() {
  return (
    <footer className="bg-brand-pink-pale border-t border-brand-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/kolorslogo.png"
                alt="Kolors Beauty Salon & Threading"
                width={140}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-black/50 text-sm leading-relaxed mb-6">
              Premium hair styling and threading services in a warm, welcoming
              environment. Your beauty, our passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-brand-black font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-black/50 hover:text-brand-pink text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-brand-black font-semibold text-lg mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-brand-black/50 hover:text-brand-pink text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-black/40 text-sm">
            © {new Date().getFullYear()} Kolors Hair Salon. All rights reserved.
          </p>
          <p className="text-brand-black/40 text-sm">
            Designed with <span className="text-brand-pink">♥</span> for beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
