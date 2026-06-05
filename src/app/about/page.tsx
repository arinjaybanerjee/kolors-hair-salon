import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kolors Hair Salon — our story, team, and commitment to making every client feel beautiful.",
};

export default function AboutPage() {
  return <About />;
}
