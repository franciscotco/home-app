import React, { useCallback, type ReactElement } from "react";

import Button from "@src/components/buttons/Button";
import { type ExpenseName } from "@src/interfaces/Expenses";

import { formatAmount } from "./ExpensesButton.utils";

export interface ExpensesButtonProps<T extends ExpenseName> {
  title: string;
  name: T;
  addExpense: (name: T) => void;
  amount: number | string;
}

const ExpensesButton = <T extends ExpenseName>({
  name,
  title,
  addExpense,
  amount,
}: ExpensesButtonProps<T>): ReactElement => {
  const handleAddExpense = useCallback(
    () => addExpense(name),
    [name, addExpense]
  );

  return (
    <Button
      onClick={handleAddExpense}
      disabled={!amount}
      width="full"
      size="medium"
      variant="primary"
      id={name}
    >
      {formatAmount(amount)} à {title}
    </Button>
  );
};

export default ExpensesButton;
