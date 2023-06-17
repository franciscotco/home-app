import React, { type ReactElement } from "react";

import { type ExpenseId, type Expense } from "../Expenses.types";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

export interface ExpenseListProps {
  items: Expense[];
  removeExpense: (id: ExpenseId) => void;
}

const ExpenseList = ({
  items,
  removeExpense,
}: ExpenseListProps): ReactElement => (
  <ul className="expense-list">
    {items.map(({ amount, id, name }) => (
      <ExpenseItem
        key={id}
        amount={amount}
        id={id}
        name={name}
        removeExpense={removeExpense}
      />
    ))}
  </ul>
);

export default ExpenseList;
