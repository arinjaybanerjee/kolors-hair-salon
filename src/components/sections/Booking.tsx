"use client";

import { useBookingForm } from "@/hooks/useBookingForm";
import SectionHeading from "@/components/ui/SectionHeading";
import StepIndicator from "@/components/booking/StepIndicator";
import Step1Category from "@/components/booking/Step1Category";
import Step2Service from "@/components/booking/Step2Service";
import Step3PersonalInfo from "@/components/booking/Step3PersonalInfo";
import Step4Confirmation from "@/components/booking/Step4Confirmation";

export default function Booking() {
  const {
    state,
    errors,
    nextStep,
    prevStep,
    setCategory,
    setService,
    setDate,
    setTimeSlot,
    setPersonal,
    reset,
    isStepValid,
  } = useBookingForm();

  return (
    <section className="bg-brand-gray-soft py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {state.step < 4 && (
          <SectionHeading
            title="Book an Appointment"
            subtitle="Choose your service, pick a time, and we'll take care of the rest."
          />
        )}

        <StepIndicator currentStep={state.step} isStepValid={isStepValid} />

        <div className="bg-brand-black/60 border border-white/10 rounded-3xl p-6 sm:p-10">
          {state.step === 1 && (
            <Step1Category
              selected={state.category}
              onSelect={setCategory}
              onNext={nextStep}
              errors={errors}
            />
          )}
          {state.step === 2 && (
            <Step2Service
              category={state.category}
              serviceId={state.serviceId}
              date={state.date}
              timeSlot={state.timeSlot}
              onSetService={setService}
              onSetDate={setDate}
              onSetTimeSlot={setTimeSlot}
              onNext={nextStep}
              onBack={prevStep}
              errors={errors}
            />
          )}
          {state.step === 3 && (
            <Step3PersonalInfo
              name={state.name}
              email={state.email}
              phone={state.phone}
              notes={state.notes}
              onSetPersonal={setPersonal}
              onNext={nextStep}
              onBack={prevStep}
              errors={errors}
            />
          )}
          {state.step === 4 && (
            <Step4Confirmation state={state} onReset={reset} />
          )}
        </div>
      </div>
    </section>
  );
}
