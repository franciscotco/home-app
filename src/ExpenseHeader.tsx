import React, { useCallback, type ReactElement } from "react";

import Button from "./components/buttons/Button";

const formatExpense = (expense: number | string) => typeof expense === "string" || isNaN(expense) ? 0 : expense.toFixed(2);

export interface ExpenseHeaderProps<T> {
  title: string;
  name: T;
  totalAmount: number;
  addExpense: (name: T) => void;
  expense: number | string;
}

const ExpenseHeader = <T,>({ name, title, totalAmount, addExpense, expense }: ExpenseHeaderProps<T>): ReactElement => {
  const handleAddExpense = useCallback(() => {
    addExpense(name);
  }, [name, addExpense]);
  
  return (
    <>
      <span>{title}: {totalAmount}€</span>
      <Button onClick={handleAddExpense} disabled={!expense}>+ {formatExpense(expense)}€ à {title}</Button>
    </>
);
}

export default ExpenseHeader;
