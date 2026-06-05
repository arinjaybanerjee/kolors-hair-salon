export type ServiceCategory = "hair" | "threading";

export interface BookingState {
  step: 1 | 2 | 3 | 4;
  category: ServiceCategory | null;
  serviceId: string | null;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export type BookingAction =
  | { type: "SET_CATEGORY"; payload: ServiceCategory }
  | { type: "SET_SERVICE"; payload: string }
  | { type: "SET_DATE"; payload: string }
  | { type: "SET_TIMESLOT"; payload: string }
  | {
      type: "SET_PERSONAL";
      payload: Partial<
        Pick<BookingState, "name" | "email" | "phone" | "notes">
      >;
    }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "RESET" };

export interface ValidationErrors {
  category?: string;
  serviceId?: string;
  date?: string;
  timeSlot?: string;
  name?: string;
  email?: string;
  phone?: string;
}
