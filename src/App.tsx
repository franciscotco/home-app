import React, { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import './App.css';
import { computeExpense } from "./App.utils";
import ExpenseList from "./ExpenseList";
import ExpenseHeader from "./ExpenseHeader";

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
  }, [handleSetExpenses]);

  const handleChangeExpense = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setExpense(parseFloat(event.currentTarget.value) || "");
  }, []);

  const addExpense = useCallback((name: keyof typeof EXPENSES) => {
    handleSetExpenses((prevExpenses) => {
      const addExpenseByName = [...prevExpenses[name], expense];
      setExpense("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return { ...prevExpenses, [name]: addExpenseByName };
    })
  }, [expense, handleSetExpenses]);

  const removeExpense = useCallback((name: keyof typeof EXPENSES, index: number): void => {
    setExpenses((prevExpenses) => {
      const deleteExpenseIndexByName = prevExpenses[name].filter((_, expenseIndex) => expenseIndex !== index);
      return { ...prevExpenses, [name]: deleteExpenseIndexByName }
    })
  }, []);

  const emmaExpenses = useMemo(() => computeExpense(expenses.emma), [expenses.emma]);
  const francoisExpenses = useMemo(() => computeExpense(expenses.francois), [expenses.francois]);

  const computeExpenses = useMemo((): string => {
    const diffExpense = emmaExpenses - francoisExpenses;

    if (diffExpense > 0) {
      return `François doit ${(Math.abs(diffExpense) / 2).toFixed(2)}€ à Emma.`
    } else if (diffExpense < 0) {
      return `Emma doit ${(Math.abs(diffExpense) / 2).toFixed(2)}€ à François.`
    } else {
      return "Les dépenses sont équilibrées."
    }
  }, [emmaExpenses, francoisExpenses]);


  return (
    <div className="App">
      <header className="header">
        <span>{computeExpenses}</span>
        <input ref={inputRef} value={expense} type="number" onChange={handleChangeExpense} autoFocus step="0.1" inputMode="decimal" />
      </header>
      <div className="App-layout">
        <div className="Expense-List-container">
          <ExpenseHeader title="François" name="francois" addExpense={addExpense} expense={expense} totalAmount={francoisExpenses} />
          <ExpenseList name="francois" removeExpense={removeExpense} expenses={expenses.francois} />
        </div>
        <div className="Expense-List-container">
          <ExpenseHeader title="Emma" name="emma" addExpense={addExpense} expense={expense} totalAmount={emmaExpenses} />
          <ExpenseList name="emma" removeExpense={removeExpense} expenses={expenses.emma} />
        </div>
      </div>
      <div>
        <button onClick={handleResetExpenses}>Réinitialiser toutes les dépenses</button>
      </div>
    </div>
  );
}

export default App;
