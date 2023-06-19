import { createSelector } from "@reduxjs/toolkit";

import { type TotalAmounts, type Expense } from "@src/interfaces/Expenses";
import { type AppSelector } from "@src/redux/redux.types";

import { type ExpensesState } from "./expenses.slice";

const sortExpensesByTimestampDesc = (state: ExpensesState): Expense[] =>
  Object.values(state).sort(
    (expenseA, expenseB) => expenseB.timestamp - expenseA.timestamp
  );

const computeTotalAmounts = (expenses: ExpensesState): TotalAmounts =>
  Object.values(expenses).reduce(
    (acc, expense) => ({
      ...acc,
      [expense.name]: acc[expense.name] + expense.amount,
    }),
    { emma: 0, francois: 0 } satisfies TotalAmounts
  );

export interface ExpensesSelectors {
  selectExpensesByTimestamp: AppSelector<Expense[]>;
  selectTotalAmounts: AppSelector<TotalAmounts>;
}

export const expensesSelectors = (
  slicer: AppSelector<ExpensesState>
): ExpensesSelectors => ({
  selectExpensesByTimestamp: createSelector(
    slicer,
    sortExpensesByTimestampDesc
  ),
  selectTotalAmounts: createSelector(slicer, computeTotalAmounts),
});
