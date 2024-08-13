import { useState } from "react";
import { createContext, useReducer } from "react";

export const BalanceContext = createContext({
  balance: 0,
  toggle: false,
  toggleHandler: () => {},
  AddTransactionItem: () => {},
  totalExpense: 0,
  totalIncome: 0,
  transactionList: [],
});

const toggleReducer = (state) => {
  return !state;
};
const balanceReducer = (state, action) => {
  if (action.type === "ADD") {
    const newBalance = state + +action.payload;
    return newBalance;
  } else if (action.type === "SUBTRACT") {
    const newBalance = state - +action.payload;
    return newBalance;
  }
};

const transactionListReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newList = [...state, action.payload];
    return newList;
  }
};

const BalanceContextProvider = ({ children }) => {
  const [balance, dispatchBalance] = useReducer(balanceReducer, 0);
  const [toggle, dispatchToggle] = useReducer(toggleReducer, false);
  const [transactionList, dispatchTransactionList] = useReducer(
    transactionListReducer,
    []
  );
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const toggleHandler = () => {
    dispatchToggle();
  };
  const handleBalance = (amount, income, expense) => {
    if (income) {
      setTotalIncome((prevIncome) => prevIncome + Number(amount));
      dispatchBalance({ type: "ADD", payload: amount });
      return true;
    } else if (expense) {
      if (balance >= amount) {
        setTotalExpense((prevExpense) => prevExpense + Number(amount));
        dispatchBalance({ type: "SUBTRACT", payload: amount });
        return true;
      } else {
        alert(
          `You don't have enough balance to make this transaction. You need at least Rs. ${Math.abs(
            amount - balance
          )} more balance to make this transaction.`
        );
        return false;
      }
    }
    return false;
  };

  const AddTransactionItem = (amount, description, expense, income) => {
    const success = handleBalance(amount, income, expense);
    if (success) {
      const newItemAction = {
        type: "ADD_ITEM",
        payload: {
          amount,
          description,
          income: income ? true : false,
          expense: expense ? true : false,
        },
      };
      dispatchTransactionList(newItemAction);
    }
  };
  return (
    <BalanceContext.Provider
      value={{
        toggle,
        balance,
        toggleHandler,
        AddTransactionItem,
        transactionList,
        totalExpense,
        totalIncome,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
