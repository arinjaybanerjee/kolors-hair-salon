"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

interface GalleryImageProps {
  item: GalleryItem;
}

export default function GalleryImage({ item }: GalleryImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl mb-4 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={600}
        height={800}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div
        className={`absolute inset-0 bg-brand-pink/60 flex items-end p-4 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-sm font-semibold">{item.alt}</p>
      </div>
    </div>
  );
}
