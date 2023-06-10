import { useCallback, useState } from "react";

import { Expenses } from "./Expenses.types";
import { INITIAL_EXPENSES } from "./Expenses.utils";

const EXPENSES_STORAGE = "EXPENSES";

export const getExpensesFromStorage = (): Expenses => {
  const expenses = localStorage.getItem(EXPENSES_STORAGE);

  if (expenses) {
    return JSON.parse(expenses) as Expenses;
  } else {
    return INITIAL_EXPENSES;
  }
};

export const setStorageExpenses = (expenses: Expenses): void => {
  localStorage.setItem(EXPENSES_STORAGE, JSON.stringify(expenses));
};

export const useExpenses = (): [Expenses, (expense: Parameters<typeof setExpenses>[0]) => void] => {
  const [expenses, setExpenses] = useState(getExpensesFromStorage);
  const handleSetExpenses = useCallback((params: Parameters<typeof setExpenses>[0]): void => {
    setExpenses((prevExpenses) => {
      const expenses = typeof params === "function" ? params(prevExpenses) : params;
      setStorageExpenses(expenses);
      return expenses;
    })
  }, [])

  return [expenses, handleSetExpenses];
}
