import { type Name, type Expenses, type Expense, type TotalAmounts } from "./Expenses.types";

export const INITIAL_EXPENSES: Expenses = {};

export const computeAmount = (expenses: Expenses): TotalAmounts => 
  Object.values(expenses).reduce((acc, expense) => ({
    ...acc,
    [expense.name]: acc[expense.name] + expense.amount
  }), { emma: 0, francois: 0 } as TotalAmounts);

export const filterExpensesByName = <N extends Name>(expenses: Expenses, name: N): Expense<N>[] =>
  Object.values(expenses).filter((expense): expense is Expense<N> => expense.name === name);

export const formatAmount = (expense: number | string): string => typeof expense === "string" || isNaN(expense) ? "0" : expense.toFixed(2);

export const formatRefund = ({ emma: emmaAmount, francois: francoisAmount }: TotalAmounts): string => {
  const diffAmount = emmaAmount - francoisAmount;

  if (diffAmount > 0) {
    return `François doit ${(Math.abs(diffAmount) / 2).toFixed(2)}€ à Emma.`
  } else if (diffAmount < 0) {
    return `Emma doit ${(Math.abs(diffAmount) / 2).toFixed(2)}€ à François.`
  } else {
    return "Les dépenses sont équilibrées."
  }
}