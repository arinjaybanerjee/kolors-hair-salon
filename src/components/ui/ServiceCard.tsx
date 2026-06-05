import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-brand-gray-soft border border-white/10 rounded-2xl p-6 hover:border-brand-pink/50 hover:-translate-y-1 transition-all duration-300">
      {/* Price badge */}
      <span className="absolute top-4 right-4 bg-brand-pink/15 text-brand-pink text-xs font-bold px-3 py-1 rounded-full border border-brand-pink/30">
        {service.price}
      </span>

      {/* Category icon dot */}
      <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center mb-4">
        {service.category === "hair" ? (
          <svg
            className="w-5 h-5 text-brand-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-brand-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
            />
          </svg>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold text-white mb-2 pr-20">
        {service.name}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-1.5 text-white/40 text-xs">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" d="M12 6v6l4 2" />
        </svg>
        {service.duration}
      </div>
    </div>
  );
}
