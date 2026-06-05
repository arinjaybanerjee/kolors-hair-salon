const STEP_LABELS = ["Category", "Service & Time", "Your Details", "Confirm"];

interface StepIndicatorProps {
  currentStep: number;
  isStepValid?: (step: 1 | 2 | 3 | 4) => boolean;
}

export default function StepIndicator({
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-10">
      {STEP_LABELS.map((label, index) => {
        const stepNum = (index + 1) as 1 | 2 | 3 | 4;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div key={stepNum} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-brand-pink text-white"
                    : isCurrent
                    ? "border-2 border-brand-pink text-brand-pink bg-brand-pink/10"
                    : "border border-white/20 text-white/30"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-xs hidden sm:block transition-colors duration-300 ${
                  isCurrent
                    ? "text-brand-pink font-medium"
                    : isCompleted
                    ? "text-white/60"
                    : "text-white/30"
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector line */}
            {index < STEP_LABELS.length - 1 && (
              <div
                className={`h-0.5 w-12 sm:w-20 mx-2 transition-all duration-300 ${
                  stepNum < currentStep ? "bg-brand-pink" : "bg-white/15"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
