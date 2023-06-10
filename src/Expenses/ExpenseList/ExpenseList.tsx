import React, { ReactElement } from "react";

import { type Expense } from "../Expenses.types";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

export interface ExpenseListProps {
  items: Expense[];
  removeExpense: (id: string) => void;
}

const ExpenseList = ({ items, removeExpense }: ExpenseListProps): ReactElement => (
  <ul className="expense-list">
    {items.map(({ amount, id }) => (
      <ExpenseItem key={id} amount={amount} id={id} removeExpense={removeExpense} />
    ))}
  </ul>
);

export default ExpenseList;
