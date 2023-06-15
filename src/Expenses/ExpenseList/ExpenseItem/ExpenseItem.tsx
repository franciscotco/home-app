import React, { useCallback, type ReactElement } from "react";

import Avatar from "@src/components/Avatar";
import Button from "@src/components/buttons/Button";
import { type Name } from "@src/interfaces/Name";

import "./ExpenseItem.css";

export interface ExpenseItemProps {
  amount: number;
  id: string;
  name: Name;
  removeExpense: (id: string) => void;
}

const ExpenseItem = ({
  amount,
  id,
  name,
  removeExpense,
}: ExpenseItemProps): ReactElement => {
  const handleRemoveExpense = useCallback(
    (): void => removeExpense(id),
    [id, removeExpense]
  );

  return (
    <li key={id} className="expense-item">
      <Avatar name={name} />
      <div className="expense-item--avatar">
        <strong>{amount}€</strong>
      </div>
      <Button onClick={handleRemoveExpense} size="small">
        supprimer
      </Button>
    </li>
  );
};

export default ExpenseItem;
