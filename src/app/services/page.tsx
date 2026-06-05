import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse all hair and threading services at Kolors Hair Salon — cuts, color, highlights, eyebrow threading, and more.",
};

export default function ServicesPage() {
  return <Services />;
}
