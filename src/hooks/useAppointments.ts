import { useContext } from "react";

import {
  AppointmentContext,
  type AppointmentContextData,
} from "../contexts/AppointmentContext";

/**
 * Hook personalizado para acessar o contexto
 * de agendamentos do HairDay.
 */
export function useAppointments(): AppointmentContextData {
  const context = useContext(AppointmentContext);

  if (context === undefined) {
    throw new Error(
      "useAppointments deve ser utilizado dentro de AppointmentProvider.",
    );
  }

  return context;
}
