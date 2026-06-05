"use client";

import { useReducer, useState, useCallback } from "react";
import type {
  BookingState,
  BookingAction,
  ValidationErrors,
  ServiceCategory,
} from "@/types/booking";

const INITIAL_STATE: BookingState = {
  step: 1,
  category: null,
  serviceId: null,
  date: "",
  timeSlot: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
};

function validateStep(state: BookingState): ValidationErrors {
  const errors: ValidationErrors = {};

  if (state.step === 1) {
    if (!state.category) errors.category = "Please select a service category.";
  }

  if (state.step === 2) {
    if (!state.serviceId) errors.serviceId = "Please select a service.";
    if (!state.date) {
      errors.date = "Please choose a date.";
    } else {
      const today = new Date().toISOString().split("T")[0];
      if (state.date < today) errors.date = "Please select a future date.";
    }
    if (!state.timeSlot) errors.timeSlot = "Please pick a time slot.";
  }

  if (state.step === 3) {
    if (!state.name || state.name.trim().length < 2)
      errors.name = "Please enter your full name.";
    if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      errors.email = "Please enter a valid email address.";
    if (!state.phone || state.phone.replace(/\D/g, "").length < 7)
      errors.phone = "Please enter a valid phone number.";
  }

  return errors;
}

function bookingReducer(
  state: BookingState,
  action: BookingAction
): BookingState {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload, serviceId: null };

    case "SET_SERVICE":
      return { ...state, serviceId: action.payload };

    case "SET_DATE":
      return { ...state, date: action.payload, timeSlot: "" };

    case "SET_TIMESLOT":
      return { ...state, timeSlot: action.payload };

    case "SET_PERSONAL":
      return { ...state, ...action.payload };

    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, 4) as BookingState["step"],
      };

    case "PREV_STEP":
      return {
        ...state,
        step: Math.max(state.step - 1, 1) as BookingState["step"],
      };

    case "RESET":
      return INITIAL_STATE;

    default:
      return state;
  }
}

export function useBookingForm() {
  const [state, dispatch] = useReducer(bookingReducer, INITIAL_STATE);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [attempted, setAttempted] = useState(false);

  const nextStep = useCallback(() => {
    const newErrors = validateStep(state);
    setAttempted(true);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setAttempted(false);
    dispatch({ type: "NEXT_STEP" });
  }, [state]);

  const prevStep = useCallback(() => {
    setErrors({});
    setAttempted(false);
    dispatch({ type: "PREV_STEP" });
  }, []);

  const setCategory = useCallback((cat: ServiceCategory) => {
    dispatch({ type: "SET_CATEGORY", payload: cat });
    setErrors((e) => ({ ...e, category: undefined }));
  }, []);

  const setService = useCallback((id: string) => {
    dispatch({ type: "SET_SERVICE", payload: id });
    setErrors((e) => ({ ...e, serviceId: undefined }));
  }, []);

  const setDate = useCallback((d: string) => {
    dispatch({ type: "SET_DATE", payload: d });
    setErrors((e) => ({ ...e, date: undefined }));
  }, []);

  const setTimeSlot = useCallback((t: string) => {
    dispatch({ type: "SET_TIMESLOT", payload: t });
    setErrors((e) => ({ ...e, timeSlot: undefined }));
  }, []);

  const setPersonal = useCallback(
    (
      fields: Partial<
        Pick<BookingState, "name" | "email" | "phone" | "notes">
      >
    ) => {
      dispatch({ type: "SET_PERSONAL", payload: fields });
      setErrors((e) => {
        const next = { ...e };
        if (fields.name !== undefined) delete next.name;
        if (fields.email !== undefined) delete next.email;
        if (fields.phone !== undefined) delete next.phone;
        return next;
      });
    },
    []
  );

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
    setErrors({});
    setAttempted(false);
  }, []);

  const isStepValid = useCallback(
    (step: 1 | 2 | 3 | 4) => {
      const check = validateStep({ ...state, step });
      return Object.keys(check).length === 0;
    },
    [state]
  );

  return {
    state,
    errors: attempted ? errors : {},
    nextStep,
    prevStep,
    setCategory,
    setService,
    setDate,
    setTimeSlot,
    setPersonal,
    reset,
    isStepValid,
  };
}
