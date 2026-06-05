import type { ServiceCategory, ValidationErrors } from "@/types/booking";
import Button from "@/components/ui/Button";

interface Step1CategoryProps {
  selected: ServiceCategory | null;
  onSelect: (cat: ServiceCategory) => void;
  onNext: () => void;
  errors: ValidationErrors;
}

const CATEGORIES = [
  {
    value: "hair" as ServiceCategory,
    title: "Hair Services",
    description:
      "Cuts, blowouts, color, highlights, balayage, keratin treatments, and more.",
    icon: (
      <svg
        className="w-10 h-10"
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
    ),
    services: ["Haircut", "Color", "Highlights", "Blowout", "Keratin"],
  },
  {
    value: "threading" as ServiceCategory,
    title: "Threading Services",
    description:
      "Eyebrow shaping, upper lip, chin, sideburns, and full face threading.",
    icon: (
      <svg
        className="w-10 h-10"
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
    ),
    services: ["Eyebrows", "Upper Lip", "Chin", "Full Face", "Sideburns"],
  },
];

export default function Step1Category({
  selected,
  onSelect,
  onNext,
  errors,
}: Step1CategoryProps) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold text-white text-center mb-2">
        What are you booking?
      </h3>
      <p className="text-white/50 text-center text-sm mb-8">
        Choose a service category to get started
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
        {CATEGORIES.map((cat) => {
          const isSelected = selected === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onSelect(cat.value)}
              className={`group text-left p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-brand-pink bg-brand-pink/10"
                  : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              <div
                className={`mb-4 transition-colors duration-200 ${
                  isSelected ? "text-brand-pink" : "text-white/50 group-hover:text-white/80"
                }`}
              >
                {cat.icon}
              </div>
              <h4
                className={`font-display text-xl font-bold mb-2 transition-colors duration-200 ${
                  isSelected ? "text-white" : "text-white/80"
                }`}
              >
                {cat.title}
              </h4>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.services.map((s) => (
                  <span
                    key={s}
                    className={`text-xs px-2.5 py-1 rounded-full transition-colors duration-200 ${
                      isSelected
                        ? "bg-brand-pink/20 text-brand-pink"
                        : "bg-white/10 text-white/40"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {errors.category && (
        <p className="text-red-400 text-sm text-center mb-4">
          {errors.category}
        </p>
      )}

      <div className="flex justify-center">
        <Button size="lg" onClick={onNext}>
          Continue
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
