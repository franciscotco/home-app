import React, { ReactElement } from "react";

import "./ExpenseList.css";

export interface ExpenseListProps<T> {
  expenses: readonly number[];
  removeExpense: (name: T, index: number) => void;
  name: T;
}

const ExpenseList = <T,>({ name, expenses, removeExpense }: ExpenseListProps<T>): ReactElement => {
  const handleRemoveExpense = (index: number) => (): void => {
    removeExpense(name, index);
  }

  return (
    <div className="Expense-List">
      {expenses.map((value, index) => (
        <div key={index} className="Expense-Item">
          <span className="Expense-Item-value">{value}€</span>
          <button onClick={handleRemoveExpense(index)}>supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
