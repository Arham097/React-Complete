import { useContext } from "react";
import { BalanceContext } from "../store/balance-store";

const ExpenseAndIncome = () => {
  const { totalExpense, totalIncome } = useContext(BalanceContext);
  return (
    <div className="expense_and_income">
      <div className="expense">
        <h4>Expense</h4>
        <h2>Rs. {totalExpense} </h2>
      </div>
      <div className="income">
        <h4>Income</h4>
        <h2>Rs. {totalIncome} </h2>
      </div>
    </div>
  );
};
export default ExpenseAndIncome;
