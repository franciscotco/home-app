import React, { ReactElement, ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

import Button from "@src/components/buttons/Button";
import Input from "@src/components/controls/Input/Input";

import { type Name } from "./Expenses.types";
import { INITIAL_EXPENSES, computeAmount, filterExpensesByName, formatRefund } from "./Expenses.utils";
import ExpenseList from "./ExpenseList";
import ExpenseHeader from "./ExpenseHeader";
import { useExpenses } from "./useExpenses";

import './Expenses.css';

const ExpensePage = (): ReactElement => {
  const [amount, setAmount] = useState<string | number>("");
  const [expenses, setExpenses] = useExpenses();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleResetExpenses = useCallback((): void => {
    if (window.confirm("Voulez-vous réinitialisez toutes les dépenses à zéro ?")) {
      setExpenses(INITIAL_EXPENSES);
    }
  }, []);

  const handleChangeAmount = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(parseFloat(event.currentTarget.value) || "");
  }, []);

  const addExpense = useCallback((name: Name) => {
    if (typeof amount === "number") {
      setExpenses((prevExpenses) => {
        const timestamp = new Date().getTime();
        const id = `${name}:${amount}:${timestamp}`;

        setAmount("");
        if (inputRef.current) {
          inputRef.current.focus();
        }

        return { ...prevExpenses, [id]: { amount, name, timestamp, id } };
      });
    }
  }, [amount]);

  const removeExpense = useCallback((id: string): void => {
    setExpenses((prevExpenses) => {
      delete prevExpenses[id];
      return { ...prevExpenses };
    })
  }, []);

  const totalAmounts = useMemo(() => computeAmount(expenses), [expenses]);
  const emmaExpenses = useMemo(() => filterExpensesByName(expenses, "emma"), [expenses]);
  const francoisExpenses = useMemo(() => filterExpensesByName(expenses, "francois"), [expenses]);

  return (
    <div className="expenses">
      <header className="expenses-header">
        <h3>{formatRefund(totalAmounts)}</h3>
        <div className="expenses-amount">
          Montant: <Input ref={inputRef} value={amount} type="number" onChange={handleChangeAmount} autoFocus step="1" inputMode="decimal" />
        </div>
      </header>
      <div className="expenses-content">
        <div className="expenses-list">
          <ExpenseHeader title="François" name="francois" addExpense={addExpense} amount={amount} totalAmount={totalAmounts.francois} />
          <ExpenseList removeExpense={removeExpense} items={francoisExpenses} />
        </div>
        <div className="expenses-list">
          <ExpenseHeader title="Emma" name="emma" addExpense={addExpense} amount={amount} totalAmount={totalAmounts.emma} />
          <ExpenseList removeExpense={removeExpense} items={emmaExpenses} />
        </div>
      </div>
      <div>
        <Button onClick={handleResetExpenses} size="medium">Réinitialiser toutes les dépenses</Button>
      </div>
    </div>
  );
}

export default ExpensePage;
