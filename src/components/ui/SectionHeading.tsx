interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-display text-4xl md:text-5xl font-bold mb-4 ${
          light ? "text-brand-black" : "text-white"
        }`}
      >
        {title}
        <span className="text-brand-pink">.</span>
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-brand-black/70" : "text-white/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-brand-pink rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
