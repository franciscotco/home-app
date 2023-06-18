import { type ExpenseId, type Expense } from "@src/interfaces/Expenses";
import { type AppDispatch } from "@src/redux/redux.types";

import { setExpense, clean, removeExpense } from "./expenses.slice";

export const createExpense =
  ({ amount, name }: Pick<Expense, "name" | "amount">) =>
  (dispatch: AppDispatch): void => {
    const timestamp = new Date().getTime();
    const id: ExpenseId = `${name}:${amount}:${timestamp}`;

    dispatch(setExpense({ amount, id, name, timestamp }));
  };

export const resetExpenses =
  () =>
  (dispatch: AppDispatch): void => {
    dispatch(clean());
  };

export const deleteExpense =
  (id: ExpenseId) =>
  (dispatch: AppDispatch): void => {
    dispatch(removeExpense(id));
  };
