import React, { useCallback, type ReactElement } from "react";

import Button from "@src/components/buttons/Button";
import { type ExpenseName } from "@src/interfaces/Expenses";

import { formatAmount } from "./ExpenseHeader.utils";

import "./ExpenseHeader.css";

export interface ExpenseHeaderProps<T extends ExpenseName> {
  title: string;
  name: T;
  totalAmount: number;
  addExpense: (name: T) => void;
  amount: number | string;
}

const ExpenseHeader = <T extends ExpenseName>({
  name,
  title,
  totalAmount,
  addExpense,
  amount,
}: ExpenseHeaderProps<T>): ReactElement => {
  const handleAddExpense = useCallback(
    () => addExpense(name),
    [name, addExpense]
  );

  return (
    <div className="expense-header">
      <h4 className="expense-header--total-amount">
        {title}: <strong>{totalAmount}€</strong>
      </h4>
      <Button onClick={handleAddExpense} disabled={!amount}>
        {formatAmount(amount)} à {title}
      </Button>
    </div>
  );
};

export default ExpenseHeader;