import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Appointment, AppointmentFormData } from "../types/appointment";

import { AVAILABLE_TIMES } from "../constants/schedule";

export type AppointmentContextData = {
  appointments: Appointment[];
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  addAppointment: (data: AppointmentFormData) => boolean;
  removeAppointment: (id: string) => void;
};

export const AppointmentContext = createContext<
  AppointmentContextData | undefined
>(undefined);

type AppointmentProviderProps = {
  children: ReactNode;
};

function getTodayDate(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function AppointmentProvider({ children }: AppointmentProviderProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [selectedDate, setSelectedDate] = useState<string>(getTodayDate);

  const addAppointment = useCallback((data: AppointmentFormData): boolean => {
    const clientName = data.clientName.trim();

    if (!clientName || !data.date || !data.time) {
      return false;
    }

    if (!AVAILABLE_TIMES.includes(data.time)) {
      return false;
    }

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      clientName,
      date: data.date,
      time: data.time,
    };

    setAppointments((previous) => [...previous, newAppointment]);

    setSelectedDate(data.date);

    return true;
  }, []);

  const removeAppointment = useCallback((id: string): void => {
    setAppointments((previous) =>
      previous.filter((appointment) => appointment.id !== id),
    );
  }, []);

  const value = useMemo<AppointmentContextData>(
    () => ({
      appointments,
      selectedDate,
      setSelectedDate,
      addAppointment,
      removeAppointment,
    }),
    [appointments, selectedDate, addAppointment, removeAppointment],
  );

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
}
