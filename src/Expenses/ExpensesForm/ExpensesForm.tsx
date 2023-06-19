import React, {
  useRef,
  type ReactElement,
  useState,
  useCallback,
  type ChangeEvent,
} from "react";

import Input from "@src/components/controls/Input";
import FormGroup from "@src/components/forms/FormGroup";
import { type ExpenseName } from "@src/interfaces/Expenses";
import { createExpense } from "@src/redux/expenses";
import { useAppDispatch, useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import ExpensesButton from "./ExpensesButton";
import { Form, FormFooter } from "./ExpensesForm.styles";

const ExpenseForm = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<string | number>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const totalAmounts = useAppSelector(selectors.expenses.selectTotalAmounts);

  const handleChangeAmount = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setAmount(parseFloat(event.currentTarget.value) || "");
    },
    []
  );

  const addExpense = useCallback(
    (name: ExpenseName) => {
      if (typeof amount === "number") {
        dispatch(createExpense({ amount, name }));
        setAmount("");
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    },
    [amount, dispatch]
  );

  return (
    <Form>
      <FormGroup label="Montant" name="amount">
        <Input
          ref={inputRef}
          id="amount"
          value={amount}
          type="number"
          onChange={handleChangeAmount}
          autoFocus
          step="1"
          inputMode="decimal"
        />
      </FormGroup>
      <FormFooter>
        <FormGroup
          label={
            <>
              François: <strong>{totalAmounts.francois}€</strong>
            </>
          }
          name="francois"
          width="full"
          align="center"
        >
          <ExpensesButton
            title="François"
            name="francois"
            addExpense={addExpense}
            amount={amount}
          />
        </FormGroup>
        <FormGroup
          label={
            <>
              Emma: <strong>{totalAmounts.emma}€</strong>
            </>
          }
          name="emma"
          width="full"
          align="center"
        >
          <ExpensesButton
            title="Emma"
            name="emma"
            addExpense={addExpense}
            amount={amount}
          />
        </FormGroup>
      </FormFooter>
    </Form>
  );
};

export default ExpenseForm;
