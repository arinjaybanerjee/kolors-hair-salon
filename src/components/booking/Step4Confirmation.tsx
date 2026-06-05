import { SERVICES } from "@/data/services";
import type { BookingState } from "@/types/booking";
import Button from "@/components/ui/Button";

interface Step4ConfirmationProps {
  state: BookingState;
  onReset: () => void;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/10 last:border-0">
      <span className="text-white/50 text-sm">{label}</span>
      <span className="text-white text-sm font-medium text-right">{value}</span>
    </div>
  );
}

export default function Step4Confirmation({
  state,
  onReset,
}: Step4ConfirmationProps) {
  const service = SERVICES.find((s) => s.id === state.serviceId);

  const formattedDate = state.date
    ? new Date(state.date + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="w-20 h-20 rounded-full bg-brand-pink/15 flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-10 h-10 text-brand-pink"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="font-display text-3xl font-bold text-white mb-2">
        You&apos;re All Set!
      </h3>
      <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
        Your appointment request has been received. We&apos;ll send a
        confirmation to <span className="text-brand-pink">{state.email}</span>{" "}
        shortly.
      </p>

      {/* Summary card */}
      <div className="bg-white/5 border border-white/15 rounded-2xl p-6 max-w-md mx-auto text-left mb-8">
        <h4 className="font-display text-white font-semibold mb-4 text-lg">
          Booking Summary
        </h4>
        <Row
          label="Category"
          value={state.category === "hair" ? "Hair Services" : "Threading Services"}
        />
        <Row label="Service" value={service?.name ?? "—"} />
        <Row label="Price" value={service?.price ?? "—"} />
        <Row label="Duration" value={service?.duration ?? "—"} />
        <Row label="Date" value={formattedDate} />
        <Row label="Time" value={state.timeSlot} />
        <Row label="Name" value={state.name} />
        <Row label="Email" value={state.email} />
        <Row label="Phone" value={state.phone} />
        {state.notes && <Row label="Notes" value={state.notes} />}
      </div>

      {/* Info note */}
      <div className="flex items-start gap-3 bg-brand-pink/10 border border-brand-pink/20 rounded-xl p-4 max-w-md mx-auto text-left mb-8">
        <svg
          className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-white/70 text-sm">
          Please arrive 5 minutes early. To reschedule, call us at{" "}
          <span className="text-brand-pink">(470) 297-1191</span>.
        </p>
      </div>

      <Button size="lg" variant="outline" onClick={onReset}>
        Book Another Appointment
      </Button>
    </div>
  );
}
