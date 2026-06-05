import type { BookingState, ValidationErrors } from "@/types/booking";
import Button from "@/components/ui/Button";

interface Step3PersonalInfoProps {
  name: string;
  email: string;
  phone: string;
  notes: string;
  onSetPersonal: (
    fields: Partial<Pick<BookingState, "name" | "email" | "phone" | "notes">>
  ) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationErrors;
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-white/80 text-sm font-medium mb-1.5"
      >
        {label}
        {required && <span className="text-brand-pink ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/30
          focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all
          ${error ? "border-red-400" : "border-white/20"}`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function Step3PersonalInfo({
  name,
  email,
  phone,
  notes,
  onSetPersonal,
  onNext,
  onBack,
  errors,
}: Step3PersonalInfoProps) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold text-white text-center mb-2">
        Your Details
      </h3>
      <p className="text-white/50 text-center text-sm mb-8">
        We&apos;ll use this to confirm your appointment
      </p>

      <div className="max-w-xl mx-auto space-y-5">
        <Field
          id="booking-name"
          label="Full Name"
          placeholder="Jane Smith"
          value={name}
          onChange={(v) => onSetPersonal({ name: v })}
          error={errors.name}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            id="booking-email"
            label="Email Address"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(v) => onSetPersonal({ email: v })}
            error={errors.email}
            required
          />
          <Field
            id="booking-phone"
            label="Phone Number"
            type="tel"
            placeholder="(470) 297-1191"
            value={phone}
            onChange={(v) => onSetPersonal({ phone: v })}
            error={errors.phone}
            required
          />
        </div>

        <div>
          <label
            htmlFor="booking-notes"
            className="block text-white/80 text-sm font-medium mb-1.5"
          >
            Notes{" "}
            <span className="text-white/30 font-normal">(optional)</span>
          </label>
          <textarea
            id="booking-notes"
            placeholder="Any special requests, allergies, or notes for your stylist..."
            value={notes}
            onChange={(e) => onSetPersonal({ notes: e.target.value })}
            rows={3}
            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 resize-none
              focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-8 max-w-xl mx-auto">
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
          Review Booking
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
