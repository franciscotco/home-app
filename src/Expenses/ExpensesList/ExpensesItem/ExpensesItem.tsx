import React, { useCallback, type ReactElement } from "react";

import { formatAmount } from "@src/Expenses/ExpensesForm/ExpensesButton/ExpensesButton.utils";
import DeleteIcon from "@src/assets/icons/delete.png";
import Avatar from "@src/components/Avatar";
import ButtonIcon from "@src/components/buttons/ButtonIcon";
import { type ExpenseId, type ExpenseName } from "@src/interfaces/Expenses";
import { deleteExpense } from "@src/redux/expenses";
import { useAppDispatch } from "@src/redux/redux.hooks";

import { Amount, Item } from "./ExpensesItem.styles";

export interface ExpensesItemProps {
  amount: number;
  id: ExpenseId;
  name: ExpenseName;
}

const ExpensesItem = ({
  amount,
  id,
  name,
}: ExpensesItemProps): ReactElement => {
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
    <Item key={id}>
      <Avatar name={name} />
      <Amount>{amount}€</Amount>
      <ButtonIcon
        onClick={handleRemoveExpense}
        src={DeleteIcon}
        alt={`Supprimer la dépense de ${name} d'un montant de ${amount}`}
        size="medium"
      />
    </Item>
  );
};

export default ExpensesItem;
