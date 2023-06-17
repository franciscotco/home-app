import React, { useCallback, type ReactElement } from "react";

import { type ExpenseId } from "@src/Expenses/Expenses.types";
import DeleteIcon from "@src/assets/icons/delete.png";
import Avatar from "@src/components/Avatar";
import ButtonIcon from "@src/components/buttons/ButtonIcon";
import { type Name } from "@src/interfaces/Name";

import "./ExpenseItem.css";

export interface ExpenseItemProps {
  amount: number;
  id: ExpenseId;
  name: Name;
  removeExpense: (id: ExpenseId) => void;
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
      <ButtonIcon
        onClick={handleRemoveExpense}
        size="small"
        src={DeleteIcon}
        alt={`Supprimer la dépense de ${name} d'un montant de ${amount}`}
      />
    </li>
  );
};

export default ExpenseItem;
