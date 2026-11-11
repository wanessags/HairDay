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

  const totalAppointments = SCHEDULE_PERIODS.reduce(
    (total, period) => total + appointmentsByPeriod[period.id].length,
    0,
  );

  return (
    <div className="appointment-list">
      <p className="appointment-list__summary" role="status">
        {totalAppointments === 0
          ? "Nenhum agendamento para a data selecionada."
          : `${totalAppointments} ${
              totalAppointments === 1
                ? "agendamento encontrado"
                : "agendamentos encontrados"
            }.`}
      </p>

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
