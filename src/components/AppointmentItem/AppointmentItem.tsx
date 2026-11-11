import { Trash2 } from "lucide-react";

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
        <Trash2
          size={18}
          strokeWidth={1.8}
          color="var(--color-primary)"
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
