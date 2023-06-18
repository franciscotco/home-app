import { expensesSelectors } from "./expenses";

export const selectors = {
  expenses: expensesSelectors(({ expenses }) => expenses),
};
