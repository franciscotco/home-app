import React, { type ReactElement, useCallback } from "react";

import Button from "@src/components/buttons/Button";
import { resetExpenses } from "@src/redux/expenses";
import { useAppDispatch, useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList";
import { formatRefund } from "./Expenses.utils";

import "./Expenses.css";

const ExpensePage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const totalAmounts = useAppSelector(selectors.expenses.selectTotalAmounts);

  const handleResetExpenses = useCallback((): void => {
    if (window.confirm("Réinitialisez toutes les dépenses à zéro ?")) {
      dispatch(resetExpenses());
    }
  }, [dispatch]);

  return (
    <div className="expenses">
      <header className="expenses-header">{formatRefund(totalAmounts)}</header>
      <main className="expenses--content">
        <ExpenseForm />
        <ExpenseList />
      </main>
      <footer className="expenses--footer">
        <Button onClick={handleResetExpenses} size="medium">
          Réinitialiser toutes les dépenses
        </Button>
      </footer>
    </div>
  );
};

export default ExpensePage;
