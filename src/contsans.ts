import { IExpense, IStats } from "./types";

export const expenses: IExpense[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const statistic: IStats[] = [
  { month: "Jan", activity: 0 },
  { month: "Feb", activity: 50 },
  { month: "Mar", activity: 0 },
  { month: "Apr", activity: 0 },
  { month: "May", activity: 40 },
  { month: "Jun", activity: 0 },
  { month: "Jul", activity: 100 },
  { month: "Aug", activity: 0 },
  { month: "Sep", activity: 45 },
  { month: "Oct", activity: 0 },
  { month: "Nov", activity: 71 },
  { month: "Dec", activity: 18 },
];

export const years: number[] = [24,23,22,21,20]
