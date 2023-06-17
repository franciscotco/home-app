export const formatAmount = (expense: number | string): string =>
  typeof expense === "string" || isNaN(expense)
    ? "0€"
    : `${expense.toFixed(2)}€`;
