import type { Appointment } from "../../types/appointment";

import "./AppointmentItem.css";

type AppointmentItemProps = {
  appointment: Appointment;
  onDelete: (id: string) => void;
};

export function AppointmentItem({
  appointment,
  onDelete,
}: AppointmentItemProps) {
  return (
    <article className="appointment-item">
      <time className="appointment-item__time">{appointment.time}</time>

      <span className="appointment-item__client">{appointment.clientName}</span>

      <button
        type="button"
        className="appointment-item__delete"
        onClick={() => onDelete(appointment.id)}
        aria-label={`Excluir agendamento de ${appointment.clientName} às ${appointment.time}`}
        title="Excluir agendamento"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 10v7" />
          <path d="M14 10v7" />
        </svg>
      </button>
    </article>
  );
}
