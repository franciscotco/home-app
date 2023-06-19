export type ExpenseName = "francois" | "emma";

type ExpenseTimestamp = number;
type ExpenseAmount = number;
export type ExpenseId<N extends ExpenseName = ExpenseName> =
  `${N}:${ExpenseAmount}:${ExpenseTimestamp}`;

export interface Expense<N extends ExpenseName = ExpenseName> {
  timestamp: ExpenseTimestamp;
  amount: ExpenseAmount;
  name: N;
  id: ExpenseId<N>;
}

export type TotalAmounts = Record<ExpenseName, number>;
