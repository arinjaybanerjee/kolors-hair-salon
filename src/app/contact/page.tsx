import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Kolors Hair Salon — address, phone, hours, and directions. We'd love to hear from you.",
};

export default function ContactPage() {
  return <Contact />;
}
