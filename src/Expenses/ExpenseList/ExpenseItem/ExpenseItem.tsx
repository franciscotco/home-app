import React, { useCallback, type ReactElement } from "react";

import { formatAmount } from "@src/Expenses/ExpenseForm/ExpenseHeader/ExpenseHeader.utils";
import DeleteIcon from "@src/assets/icons/delete.png";
import Avatar from "@src/components/Avatar";
import ButtonIcon from "@src/components/buttons/ButtonIcon";
import { type ExpenseId, type ExpenseName } from "@src/interfaces/Expenses";
import { deleteExpense } from "@src/redux/expenses";
import { useAppDispatch } from "@src/redux/redux.hooks";

import "./ExpenseItem.css";

export interface ExpenseItemProps {
  amount: number;
  id: ExpenseId;
  name: ExpenseName;
}

const ExpenseItem = ({ amount, id, name }: ExpenseItemProps): ReactElement => {
  const dispatch = useAppDispatch();

  const handleRemoveExpense = useCallback((): void => {
    if (
      window.confirm(
        `Retirer la dépense de ${formatAmount(amount)} à ${name} ?`
      )
    ) {
      dispatch(deleteExpense(id));
    }
  }, [amount, dispatch, id, name]);

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
