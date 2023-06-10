import React, { useCallback, type ReactElement } from "react";

import Button from "../components/buttons/Button";

import { formatAmount } from "./Expenses.utils";
import { type Name } from "./Expenses.types";

export interface ExpenseHeaderProps<T extends Name> {
  title: string;
  name: T;
  totalAmount: number;
  addExpense: (name: T) => void;
  amount: number | string;
}

const ExpenseHeader = <T extends Name>({ name, title, totalAmount, addExpense, amount }: ExpenseHeaderProps<T>): ReactElement => {
  const handleAddExpense = useCallback(() => addExpense(name), [name, addExpense]);
  
  return (
    <>
      <h4>{title}: {totalAmount}€</h4>
      <Button onClick={handleAddExpense} disabled={!amount}>+ {formatAmount(amount)}€ à {title}</Button>
    </>
);
}

export default ExpenseHeader;
