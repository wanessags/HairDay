import type { Period } from "../types/appointment";

export type SchedulePeriod = {
  id: Period;
  label: string;
  range: string;
  times: string[];
};

export const SCHEDULE_PERIODS: SchedulePeriod[] = [
  {
    id: "morning",
    label: "Manhã",
    range: "09h às 12h",
    times: ["09:00", "10:00", "11:00", "12:00"],
  },
  {
    id: "afternoon",
    label: "Tarde",
    range: "13h às 18h",
    times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  {
    id: "evening",
    label: "Noite",
    range: "19h às 21h",
    times: ["19:00", "20:00", "21:00"],
  },
];

export const AVAILABLE_TIMES: string[] = SCHEDULE_PERIODS.flatMap(
  (period) => period.times,
);
