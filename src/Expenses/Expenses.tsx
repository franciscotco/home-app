import React, {
  type ReactElement,
  type ChangeEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import Button from "@src/components/buttons/Button";
import Input from "@src/components/controls/Input/Input";
import FormGroup from "@src/components/forms/FormGroup";
import { type Name } from "@src/interfaces/Name";

import ExpenseHeader from "./ExpenseHeader";
import ExpenseList from "./ExpenseList";
import {
  INITIAL_EXPENSES,
  TRADUCTION,
  computeAmount,
  formatRefund,
  sortExpensesByTimestampDesc,
} from "./Expenses.utils";
import { useExpenses } from "./useExpenses";

import "./Expenses.css";

const ExpensePage = (): ReactElement => {
  const [amount, setAmount] = useState<string | number>("");
  const [expenses, setExpenses] = useExpenses();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleResetExpenses = useCallback((): void => {
    if (
      window.confirm("Voulez-vous réinitialisez toutes les dépenses à zéro ?")
    ) {
      setExpenses(INITIAL_EXPENSES);
    }
  }, [setExpenses]);

  const handleChangeAmount = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setAmount(parseFloat(event.currentTarget.value) || "");
    },
    []
  );

  const addExpense = useCallback(
    (name: Name) => {
      if (typeof amount === "number") {
        setExpenses((prevExpenses) => {
          const timestamp = new Date().getTime();
          const id = `${name}:${amount}:${timestamp}`;

          setAmount("");
          if (inputRef.current) {
            inputRef.current.focus();
          }

          return {
            ...prevExpenses,
            [id]: { amount, name, timestamp, id },
          };
        });
      }
    },
    [amount, setExpenses]
  );

  const removeExpense = useCallback(
    (id: string): void => {
      setExpenses((prevExpenses) => {
        delete prevExpenses[id];
        return { ...prevExpenses };
      });
    },
    [setExpenses]
  );

  const totalAmounts = useMemo(() => computeAmount(expenses), [expenses]);
  const sortedExpensesByTimestampDesc = useMemo(
    () => sortExpensesByTimestampDesc(Object.values(expenses)),
    [expenses]
  );

  return (
    <div className="expenses">
      <header className="expenses-header">
        <h3>{formatRefund(totalAmounts)}</h3>
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
      </header>
      <div className="expenses--content">
        <div className="expenses-list">
          <ExpenseHeader
            title={TRADUCTION.francois}
            name="francois"
            addExpense={addExpense}
            amount={amount}
            totalAmount={totalAmounts.francois}
          />
          <ExpenseHeader
            title={TRADUCTION.emma}
            name="emma"
            addExpense={addExpense}
            amount={amount}
            totalAmount={totalAmounts.emma}
          />
        </div>
        <div>
          {sortedExpensesByTimestampDesc.length > 0 && (
            <span className="expenses--list-sort">Plus récent</span>
          )}
          <ExpenseList
            removeExpense={removeExpense}
            items={sortedExpensesByTimestampDesc}
          />
        </div>
      </div>
      <div className="expenses--footer">
        <Button onClick={handleResetExpenses} size="medium">
          Réinitialiser toutes les dépenses
        </Button>
      </div>
    </div>
  );
};

export default ExpensePage;
