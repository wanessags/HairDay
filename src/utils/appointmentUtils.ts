import { SCHEDULE_PERIODS } from "../constants/schedule";

import type {
  Appointment,
  AppointmentsByPeriod,
  Period,
} from "../types/appointment";

/**
 * Identifica o período correspondente a um horário.
 */
export function getPeriodByTime(time: string): Period | null {
  const period = SCHEDULE_PERIODS.find((item) => item.times.includes(time));

  return period?.id ?? null;
}

/**
 * Filtra os agendamentos pela data selecionada.
 */
export function filterAppointmentsByDate(
  appointments: Appointment[],
  date: string,
): Appointment[] {
  return appointments.filter((appointment) => appointment.date === date);
}

/**
 * Organiza os agendamentos em ordem cronológica.
 * Cria uma cópia para não modificar o array original.
 */
export function sortAppointmentsByTime(
  appointments: Appointment[],
): Appointment[] {
  return [...appointments].sort((a, b) => a.time.localeCompare(b.time));
}

/**
 * Agrupa os agendamentos por manhã, tarde e noite.
 */
export function groupAppointmentsByPeriod(
  appointments: Appointment[],
): AppointmentsByPeriod {
  const initialGroups: AppointmentsByPeriod = {
    morning: [],
    afternoon: [],
    evening: [],
  };

  return sortAppointmentsByTime(appointments).reduce((groups, appointment) => {
    const period = getPeriodByTime(appointment.time);

    if (period) {
      groups[period].push(appointment);
    }

    return groups;
  }, initialGroups);
}

/**
 * Retorna os agendamentos de uma data,
 * separados por período e ordenados por horário.
 */
export function getAppointmentsForDate(
  appointments: Appointment[],
  date: string,
): AppointmentsByPeriod {
  const filteredAppointments = filterAppointmentsByDate(appointments, date);

  return groupAppointmentsByPeriod(filteredAppointments);
}
