"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";
import type { ServiceCategory } from "@/types/booking";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("hair");

  const filtered = SERVICES.filter((s) => s.category === activeTab);

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Services"
          subtitle="From expert haircuts and color to precision threading — everything you need to look and feel your best."
          light
        />

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["hair", "threading"] as ServiceCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/25"
                  : "bg-brand-black/10 text-brand-black/60 hover:bg-brand-black/20 hover:text-brand-black"
              }`}
            >
              {tab === "hair" ? "✂ Hair Services" : "✦ Threading & Beauty"}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-brand-black/50 text-sm mb-4">
            Walk-ins welcome · Appointments preferred
          </p>
          <Button href="/contact" size="lg">
            Book Your Session
          </Button>
        </div>
      </div>
    </section>
  );
}
