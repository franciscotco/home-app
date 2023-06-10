export type Name = "francois" | "emma";

export interface Expense<N extends Name = Name> {
  timestamp: number;
  amount: number;
  name: N;
  id: string;
}

export type Expenses = Record<string, Expense>;

export type TotalAmounts = Record<Name, number>;
