export const computeExpense = (expenses: readonly number[]): number => expenses.reduce((acc, expense) => acc + expense, 0 as number);
