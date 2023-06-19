import React, { type ReactElement, useCallback } from "react";

import Button from "@src/components/buttons/Button";
import { resetExpenses } from "@src/redux/expenses";
import { useAppDispatch, useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import { Root, Header, Footer, Main } from "./Expenses.styles";
import { formatRefund } from "./Expenses.utils";
import ExpenseForm from "./ExpensesForm/ExpensesForm";
import ExpensesList from "./ExpensesList";

const Expenses = (): ReactElement => {
  const dispatch = useAppDispatch();
  const totalAmounts = useAppSelector(selectors.expenses.selectTotalAmounts);

  const handleResetExpenses = useCallback((): void => {
    if (window.confirm("Réinitialisez toutes les dépenses à zéro ?")) {
      dispatch(resetExpenses());
    }
  }, [dispatch]);

  return (
    <Root>
      <Header>{formatRefund(totalAmounts)}</Header>
      <Main>
        <ExpenseForm />
        <ExpensesList />
      </Main>
      <Footer>
        <Button onClick={handleResetExpenses} size="medium" variant="primary">
          Réinitialiser toutes les dépenses
        </Button>
      </Footer>
    </Root>
  );
};

export default Expenses;
