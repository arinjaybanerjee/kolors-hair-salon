import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";

const FEATURED_IDS = ["womens-haircut", "partial-highlights", "keratin", "eyebrows", "korean-facial", "bridal-packages"];

export default function HomeServicesTeaser() {
  const featured = SERVICES.filter((s) => FEATURED_IDS.includes(s.id));

  return (
    <section className="bg-brand-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Services"
          subtitle="From expert haircuts and color to precision threading — everything you need."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
