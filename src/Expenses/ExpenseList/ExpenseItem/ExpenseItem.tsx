import React, { useCallback, type ReactElement } from "react";

import Button from "@src/components/buttons/Button";

import "./ExpenseItem.css";

export interface ExpenseItemProps {
  amount: number;
  id: string;
  removeExpense: (id: string) => void;
}

const ExpenseItem = ({ amount, id, removeExpense }: ExpenseItemProps): ReactElement => {
  const handleRemoveExpense = useCallback((): void => removeExpense(id), []);

  return (
    <li key={id} className="expense-item">
      {amount}€
      <Button onClick={handleRemoveExpense} size="small">supprimer</Button>
    </li>
  );
};

export default ExpenseItem;