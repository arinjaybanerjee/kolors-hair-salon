import { GALLERY_ITEMS } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryImage from "@/components/ui/GalleryImage";

export default function Gallery() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Work"
          subtitle="A glimpse into the transformations and artistry we bring to every appointment."
          light
        />
        <div className="columns-2 md:columns-3 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
