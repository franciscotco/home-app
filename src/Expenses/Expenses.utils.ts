import { type TotalAmounts } from "@src/interfaces/Expenses";

export const formatRefund = ({
  emma: emmaAmount,
  francois: francoisAmount,
}: TotalAmounts): string => {
  const diffAmount = emmaAmount - francoisAmount;

  if (diffAmount > 0) {
    return `François doit ${(Math.abs(diffAmount) / 2).toFixed(2)}€ à Emma.`;
  } else if (diffAmount < 0) {
    return `Emma doit ${(Math.abs(diffAmount) / 2).toFixed(2)}€ à François.`;
  } else {
    return "Les dépenses sont équilibrées.";
  }
};
