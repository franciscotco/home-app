import React, { ReactElement, useCallback } from "react";
import { computeExpense } from "./App.utils";

import "./ExpenseList.css";

export interface ExpenseListProps<T> {
  expenses: readonly number[];
  addExpense: (name: T) => void;
  removeExpense: (name: T, index: number) => void;
  name: T;
  nextExpense: number | string;
  title: string;
}

const ExpenseList = <T,>({ name, expenses, nextExpense, addExpense, removeExpense, title }: ExpenseListProps<T>): ReactElement => {
  const handleAddExpense = useCallback(() => {
    addExpense(name);
  }, [name, addExpense]);
  const handleRemoveExpense = (index: number) => (): void => {
    removeExpense(name, index);
  }
  const expense = typeof nextExpense === "string" || isNaN(nextExpense) ? 0 : nextExpense;

  return (
    <div className="Expense-List-container">
      <span>{title}: {computeExpense(expenses).toFixed(2)}€</span>
      <button onClick={handleAddExpense} disabled={expense === 0}>Ajouter {expense.toFixed(2)}€ à {title}</button>
      <div className="Expense-List">
        {expenses.map((value, index) => <div key={index} className="Expense-Item"><span className="Expense-Item-value">{value}€</span><button onClick={handleRemoveExpense(index)}>supprimer</button></div>)}
      </div>
    </div>
  );
};

export default ExpenseList;
