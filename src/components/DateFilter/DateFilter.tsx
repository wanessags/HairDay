import { useId, type ChangeEvent } from "react";

import { useAppointments } from "../../hooks/useAppointments";

import "./DateFilter.css";

type DateFilterProps = {
  label?: string;
};

export function DateFilter({
  label = "Data dos agendamentos",
}: DateFilterProps) {
  const { selectedDate, setSelectedDate } = useAppointments();

  const inputId = useId();

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedDate(event.target.value);
  }

  return (
    <div className="date-filter">
      <label className="date-filter__label" htmlFor={inputId}>
        {label}
      </label>

      <input
        id={inputId}
        className="date-filter__input"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
}
