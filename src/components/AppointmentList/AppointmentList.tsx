import { useMemo } from "react";

import { useAppointments } from "../../hooks/useAppointments";
import { SCHEDULE_PERIODS } from "../../constants/schedule";
import { getAppointmentsForDate } from "../../utils/appointmentUtils";
import { PeriodSection } from "../PeriodSection/PeriodSection";

import "./AppointmentList.css";

export function AppointmentList() {
  const { appointments, selectedDate, removeAppointment } = useAppointments();

  const appointmentsByPeriod = useMemo(
    () => getAppointmentsForDate(appointments, selectedDate),
    [appointments, selectedDate],
  );

  return (
    <div className="appointment-list" aria-label="Lista de agendamentos">
      <div className="appointment-list__periods">
        {SCHEDULE_PERIODS.map((period) => (
          <PeriodSection
            key={period.id}
            period={period.id}
            title={period.label}
            range={period.range}
            appointments={appointmentsByPeriod[period.id]}
            onDelete={removeAppointment}
          />
        ))}
      </div>
    </div>
  );
}
