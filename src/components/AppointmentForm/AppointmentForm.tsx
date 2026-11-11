import { useState, type FormEvent } from "react";
import { CalendarDays, UserRound } from "lucide-react";

import { useAppointments } from "../../hooks/useAppointments";
import { SCHEDULE_PERIODS } from "../../constants/schedule";

import "./AppointmentForm.css";

type FormErrors = {
  clientName?: string;
  date?: string;
  time?: string;
};

function getTodayDate(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function AppointmentForm() {
  const { addAppointment, selectedDate } = useAppointments();

  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState(selectedDate);
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors: FormErrors = {};

    if (!clientName.trim()) {
      newErrors.clientName = "Informe o nome do cliente.";
    }

    if (!date) {
      newErrors.date = "Selecione uma data.";
    }

    if (!time) {
      newErrors.time = "Selecione um horário.";
    }

    setErrors(newErrors);
    setSuccessMessage("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const created = addAppointment({
      clientName: clientName.trim(),
      date,
      time,
    });

    if (!created) {
      setErrors({
        time: "Não foi possível cadastrar. Verifique os dados.",
      });
      return;
    }

    setClientName("");
    setTime("");
    setSuccessMessage("Agendamento realizado com sucesso!");
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate>
      <div className="appointment-form__field">
        <label className="appointment-form__label" htmlFor="appointment-date">
          Data
        </label>

        <div className="appointment-form__input-wrapper">
          <CalendarDays
            className="appointment-form__field-icon"
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <input
            id="appointment-date"
            className="appointment-form__input appointment-form__input--icon"
            type="date"
            value={date}
            min={getTodayDate()}
            onChange={(event) => {
              setDate(event.target.value);
              setErrors((previous) => ({
                ...previous,
                date: undefined,
              }));
              setSuccessMessage("");
            }}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={
              errors.date ? "appointment-date-error" : undefined
            }
            required
          />
        </div>

        {errors.date && (
          <span
            id="appointment-date-error"
            className="appointment-form__error"
            role="alert"
          >
            {errors.date}
          </span>
        )}
      </div>

      <fieldset className="appointment-form__times">
        <legend className="appointment-form__label">Horários</legend>

        {SCHEDULE_PERIODS.map((period) => (
          <div className="appointment-form__period" key={period.id}>
            <h3 className="appointment-form__period-title">{period.label}</h3>

            <div className="appointment-form__time-grid">
              {period.times.map((availableTime) => (
                <button
                  key={availableTime}
                  type="button"
                  className={`appointment-form__time ${
                    time === availableTime
                      ? "appointment-form__time--selected"
                      : ""
                  }`}
                  aria-pressed={time === availableTime}
                  onClick={() => {
                    setTime(availableTime);
                    setErrors((previous) => ({
                      ...previous,
                      time: undefined,
                    }));
                    setSuccessMessage("");
                  }}
                >
                  {availableTime}
                </button>
              ))}
            </div>
          </div>
        ))}

        {errors.time && (
          <span
            id="appointment-time-error"
            className="appointment-form__error"
            role="alert"
          >
            {errors.time}
          </span>
        )}
      </fieldset>

      <div className="appointment-form__field">
        <label className="appointment-form__label" htmlFor="appointment-client">
          Cliente
        </label>

        <div className="appointment-form__input-wrapper">
          <UserRound
            className="appointment-form__field-icon"
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <input
            id="appointment-client"
            className="appointment-form__input appointment-form__input--icon"
            type="text"
            value={clientName}
            placeholder="Nome do cliente"
            autoComplete="name"
            maxLength={100}
            onChange={(event) => {
              setClientName(event.target.value);
              setErrors((previous) => ({
                ...previous,
                clientName: undefined,
              }));
              setSuccessMessage("");
            }}
            aria-invalid={Boolean(errors.clientName)}
            aria-describedby={
              errors.clientName ? "appointment-client-error" : undefined
            }
            required
          />
        </div>

        {errors.clientName && (
          <span
            id="appointment-client-error"
            className="appointment-form__error"
            role="alert"
          >
            {errors.clientName}
          </span>
        )}
      </div>

      <button className="appointment-form__submit" type="submit">
        Agendar
      </button>

      {successMessage && (
        <p className="appointment-form__success" role="status">
          {successMessage}
        </p>
      )}
    </form>
  );
}
