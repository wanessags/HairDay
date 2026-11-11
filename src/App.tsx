import { ScheduleSidebar } from "./components/ScheduleSidebar/ScheduleSidebar";
import { AppointmentForm } from "./components/AppointmentForm/AppointmentForm";

import "./App.css";

function App() {
  return (
    <div className="app">
      <ScheduleSidebar>
        <AppointmentForm />
      </ScheduleSidebar>

      <main className="app__main">
        <header className="app__header">
          <h2 className="app__title">Sua agenda</h2>

          <p className="app__description">
            Consulte e gerencie os agendamentos dos seus clientes.
          </p>
        </header>

        <section className="app__appointments" aria-label="Agendamentos do dia">
          <p className="app__empty-message">
            Os agendamentos serão exibidos aqui.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
