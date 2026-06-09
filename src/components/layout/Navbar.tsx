"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-brand-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 md:h-36">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kolorslogo.png"
              alt="Kolors Beauty Salon & Threading"
              width={280}
              height={112}
              className="h-28 md:h-32 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200
                    after:absolute after:bottom-[-4px] after:left-0 after:h-0.5
                    after:bg-brand-pink after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-brand-black after:w-full"
                        : "text-brand-black/60 hover:text-brand-black after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-black p-2 focus:outline-none focus:ring-2 focus:ring-brand-pink rounded-lg"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-brand-black transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-brand-black transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-brand-black transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 backdrop-blur-md border-t border-brand-black/10`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2 border-b border-brand-black/10 last:border-0 transition-colors ${
                  isActive ? "text-brand-pink" : "text-brand-black/70 hover:text-brand-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact" size="md" className="mt-2 w-full">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
