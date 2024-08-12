import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { BalanceContext } from "../store/balance-store";

const Transactions = () => {
  const { transactionList } = useContext(BalanceContext);
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      {transactionList.map((item, index) => (
        <TransactionItem key={index} items={item} />
      ))}
    </div>
  );
};

export default Transactions;
