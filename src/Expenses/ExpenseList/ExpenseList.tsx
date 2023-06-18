import React, { type ReactElement } from "react";

import { useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (): ReactElement => {
  const sortedExpensesByTimestampDesc = useAppSelector(
    selectors.expenses.selectExpensesByTimestamp
  );

  return (
    <div className="expenses--list">
      {sortedExpensesByTimestampDesc.length > 0 && (
        <span className="expenses--list-sort">Plus récent</span>
      )}
      <ul className="expense-list">
        {sortedExpensesByTimestampDesc.map(({ amount, id, name }) => (
          <ExpenseItem key={id} amount={amount} id={id} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
