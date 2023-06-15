import React, { useCallback, type ReactElement } from "react";

import Button from "@src/components/buttons/Button";
import { type Name } from "@src/interfaces/Name";

import { formatAmount } from "./ExpenseHeader.utils";

import "./ExpenseHeader.css";

export interface ExpenseHeaderProps<T extends Name> {
  title: string;
  name: T;
  totalAmount: number;
  addExpense: (name: T) => void;
  amount: number | string;
}

const ExpenseHeader = <T extends Name>({
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
        {formatAmount(amount)}€ de {title}
      </Button>
    </div>
  );
};

export default ExpenseHeader;
