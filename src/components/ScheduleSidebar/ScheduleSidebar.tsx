import type { ReactNode } from "react";
import { Scissors } from "lucide-react";

import "./ScheduleSidebar.css";

type ScheduleSidebarProps = {
  children?: ReactNode;
};

export function ScheduleSidebar({ children }: ScheduleSidebarProps) {
  return (
    <aside className="schedule-sidebar" aria-label="Painel de agendamento">
      <div className="schedule-sidebar__content">
        <div className="schedule-sidebar__brand" aria-label="HairDay">
          <Scissors
            size={28}
            strokeWidth={1.8}
            color="var(--color-primary)"
            aria-hidden="true"
          />

          <span className="schedule-sidebar__brand-name">
            Hair<span>Day</span>
          </span>
        </div>

        <header className="schedule-sidebar__header">
          <h1 className="schedule-sidebar__title">Agende um atendimento</h1>

          <p className="schedule-sidebar__description">
            Selecione a data, o horário e informe o nome do cliente para criar
            um agendamento.
          </p>
        </header>

        <div className="schedule-sidebar__form">{children}</div>
      </div>
    </aside>
  );
}
