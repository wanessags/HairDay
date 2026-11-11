import { AppointmentItem } from "../AppointmentItem/AppointmentItem";

import type { Appointment, Period } from "../../types/appointment";

type PeriodSectionProps = {
  period: Period;
  title: string;
  range: string;
  appointments: Appointment[];
  onDelete: (id: string) => void;
};

const EMPTY_MESSAGE =
  "Você ainda não tem agendamentos cadastrados nesse período.";

export function PeriodSection({
  period,
  title,
  range,
  appointments,
  onDelete,
}: PeriodSectionProps) {
  const sortedAppointments = [...appointments].sort((a, b) =>
    a.time.localeCompare(b.time),
  );

  return (
    <section
      className="period-section"
      aria-labelledby={`period-${period}-title`}
    >
      <header className="period-section__header">
        <div className="period-section__heading">
          <h3 id={`period-${period}-title`} className="period-section__title">
            {title}
          </h3>

          <span className="period-section__range">{range}</span>
        </div>
      </header>

      <div className="period-section__content">
        {sortedAppointments.length === 0 ? (
          <p className="period-section__empty">{EMPTY_MESSAGE}</p>
        ) : (
          <div className="period-section__list">
            {sortedAppointments.map((appointment) => (
              <AppointmentItem
                key={appointment.id}
                appointment={appointment}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
