import type { ReactNode } from "react";

type ScheduleSidebarProps = {
  children?: ReactNode;
};

export function ScheduleSidebar({ children }: ScheduleSidebarProps) {
  return (
    <aside className="schedule-sidebar" aria-label="Painel de agendamento">
      <div className="schedule-sidebar__content">
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
