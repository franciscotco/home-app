import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  type ExpenseName,
  type Expense,
  type ExpenseId,
} from "@src/interfaces/Expenses";

export const EXPENSES_SLICE_NAME = "expenses";

export type ExpensesState<Name extends ExpenseName = ExpenseName> = Record<
  ExpenseId<Name>,
  Expense<Name>
>;

const initialState: ExpensesState = {};

const slice = createSlice({
  name: EXPENSES_SLICE_NAME,
  initialState,
  reducers: {
    setExpense(state, action: PayloadAction<Expense>) {
      state[action.payload.id] = action.payload;
    },
    removeExpense(state, action: PayloadAction<ExpenseId>) {
      delete state[action.payload];
    },
    clean: () => initialState,
  },
});

export const { clean, setExpense, removeExpense } = slice.actions;
export default slice.reducer;
