import { type Name } from "@src/interfaces/Name";

type ExpenseTimestamp = number;
type ExpenseAmount = number;
export type ExpenseId = `${Name}:${ExpenseAmount}:${ExpenseTimestamp}`;

export interface Expense<N extends Name = Name> {
  timestamp: ExpenseTimestamp;
  amount: ExpenseAmount;
  name: N;
  id: ExpenseId;
}

export type Expenses = Record<ExpenseId, Expense>;

export type TotalAmounts = Record<Name, number>;
