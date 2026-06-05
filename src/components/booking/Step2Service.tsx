import { SERVICES, TIME_SLOTS } from "@/data/services";
import type { ServiceCategory, ValidationErrors } from "@/types/booking";
import Button from "@/components/ui/Button";

interface Step2ServiceProps {
  category: ServiceCategory | null;
  serviceId: string | null;
  date: string;
  timeSlot: string;
  onSetService: (id: string) => void;
  onSetDate: (d: string) => void;
  onSetTimeSlot: (t: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationErrors;
}

export default function Step2Service({
  category,
  serviceId,
  date,
  timeSlot,
  onSetService,
  onSetDate,
  onSetTimeSlot,
  onNext,
  onBack,
  errors,
}: Step2ServiceProps) {
  const services = SERVICES.filter((s) => s.category === category);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h3 className="font-display text-2xl font-semibold text-white text-center mb-2">
        Select Your Service
      </h3>
      <p className="text-white/50 text-center text-sm mb-8">
        Choose a service, then pick your preferred date and time
      </p>

      {/* Services */}
      <div className="mb-8">
        <label className="block text-white/80 text-sm font-medium mb-3">
          Available Services
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
          {services.map((service) => {
            const isSelected = serviceId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => onSetService(service.id)}
                className={`flex items-start justify-between gap-3 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-brand-pink bg-brand-pink/10"
                    : "border-white/15 bg-white/5 hover:border-white/30"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold ${
                      isSelected ? "text-white" : "text-white/80"
                    }`}
                  >
                    {service.name}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5 truncate">
                    {service.duration}
                  </p>
                </div>
                <span
                  className={`text-xs font-bold whitespace-nowrap ${
                    isSelected ? "text-brand-pink" : "text-white/50"
                  }`}
                >
                  {service.price}
                </span>
              </button>
            );
          })}
        </div>
        {errors.serviceId && (
          <p className="text-red-400 text-xs mt-2">{errors.serviceId}</p>
        )}
      </div>

      {/* Date */}
      <div className="mb-8">
        <label
          htmlFor="booking-date"
          className="block text-white/80 text-sm font-medium mb-3"
        >
          Preferred Date
        </label>
        <input
          id="booking-date"
          type="date"
          min={today}
          value={date}
          onChange={(e) => onSetDate(e.target.value)}
          className="w-full sm:w-auto bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-colors"
        />
        {errors.date && (
          <p className="text-red-400 text-xs mt-2">{errors.date}</p>
        )}
      </div>

      {/* Time slots */}
      <div className="mb-8">
        <label className="block text-white/80 text-sm font-medium mb-3">
          Available Time Slots
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {TIME_SLOTS.map((slot) => {
            const isSelected = timeSlot === slot;
            return (
              <button
                key={slot}
                onClick={() => onSetTimeSlot(slot)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-brand-pink text-white shadow-md shadow-brand-pink/30"
                    : "bg-white/5 border border-white/15 text-white/60 hover:border-brand-pink/50 hover:text-white"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
        {errors.timeSlot && (
          <p className="text-red-400 text-xs mt-2">{errors.timeSlot}</p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="outline" onClick={onBack}>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Button>
        <Button onClick={onNext}>
          Continue
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
