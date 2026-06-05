import type { Metadata } from "next";
import Gallery from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our work — hair transformations, threading results, and a peek inside Kolors Hair Salon.",
};

export default function GalleryPage() {
  return <Gallery />;
}
