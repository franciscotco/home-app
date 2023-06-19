import React, { type ReactElement } from "react";

import { useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import ExpensesItem from "./ExpensesItem";
import { Root, SortOrder, List } from "./ExpensesList.styles";

const ExpensesList = (): ReactElement => {
  const sortedExpensesByTimestampDesc = useAppSelector(
    selectors.expenses.selectExpensesByTimestamp
  );

  return (
    <Root>
      {sortedExpensesByTimestampDesc.length > 0 && (
        <SortOrder>Plus récent</SortOrder>
      )}
      <List>
        {sortedExpensesByTimestampDesc.map(({ amount, id, name }) => (
          <ExpensesItem key={id} amount={amount} id={id} name={name} />
        ))}
      </List>
    </Root>
  );
};

export default ExpensesList;
