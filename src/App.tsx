import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import './App.css';
import { computeExpense } from "./App.utils";
import ExpenseList from "./ExpenseList";

const EXPENSES_STORAGE = "EXPENSES";

const INITIAL_EXPENSES = { francois: [], emma: [] } as const;

const getExpensesFromStorage = () => {
  const expenses = localStorage.getItem(EXPENSES_STORAGE);
  if (expenses) {
    return JSON.parse(expenses) as typeof INITIAL_EXPENSES;
  } else {
    return INITIAL_EXPENSES;
  }
};

const EXPENSES = getExpensesFromStorage();

const App = () => {
  const [expense, setExpense] = useState<string | number>("");
  const [expenses, setExpenses] = useState(EXPENSES);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSetExpenses = useCallback((params: typeof EXPENSES | ((prev: typeof EXPENSES) => typeof EXPENSES)): void => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = typeof params === "function" ? params(prevExpenses) : params;
      localStorage.setItem(EXPENSES_STORAGE, JSON.stringify(updatedExpenses));
      return updatedExpenses;
    })
  }, []);

  const handleResetExpenses = useCallback((): void => {
    if (window.confirm("Voulez-vous réinitialisez toutes les dépenses à zéro ?")) {
      handleSetExpenses(INITIAL_EXPENSES)
    }
  }, []);

  const handleChangeExpense = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setExpense(parseFloat(event.currentTarget.value));
  }, []);

  const computeExpenses = useMemo((): string => {
    const diffExpense = computeExpense(expenses.emma) - computeExpense(expenses.francois);

    if (diffExpense > 0) {
      return `François doit ${(Math.abs(diffExpense) / 2).toFixed(2)}€ à Emma.`
    } else if (diffExpense < 0) {
      return `Emma doit ${(Math.abs(diffExpense) / 2).toFixed(2)}€ à François.`
    } else {
      return "Les dépenses sont équilibrées."
    }
  }, [expenses]);

  const addExpense = useCallback((name: keyof typeof EXPENSES) => {
    handleSetExpenses((prevExpenses) => {
      const addExpenseByName = [...prevExpenses[name], expense];
      setExpense("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return { ...prevExpenses, [name]: addExpenseByName };
    })
  }, [expense]);

  const removeExpense = (name: keyof typeof EXPENSES, index: number): void => {
    setExpenses((prevExpenses) => {
      const deleteExpenseIndexByName = prevExpenses[name].filter((_, expenseIndex) => expenseIndex !== index);
      return { ...prevExpenses, [name]: deleteExpenseIndexByName }
    })
  };

  return (
    <div className="App">
      <header className="header">
        <span>{computeExpenses}</span>
        <input ref={inputRef} value={expense} type="number" onChange={handleChangeExpense} />
      </header>
      <div className="App-layout">
        <ExpenseList title="François" name="francois" removeExpense={removeExpense} addExpense={addExpense} nextExpense={expense} expenses={expenses.francois} />
        <ExpenseList title="Emma" name="emma" removeExpense={removeExpense} addExpense={addExpense} nextExpense={expense} expenses={expenses.emma} />
      </div>
      <div>
        <button onClick={handleResetExpenses}>Réinitialiser toutes les dépenses</button>
      </div>
    </div>
  );
}

export default App;
