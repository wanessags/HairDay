export type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
};

export type Period = "morning" | "afternoon" | "evening";

export type AppointmentFormData = Omit<Appointment, "id">;

export type AppointmentsByPeriod = Record<Period, Appointment[]>;
