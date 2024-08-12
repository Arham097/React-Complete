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
      let newIncome = totalIncome + Number(amount);
      setTotalIncome(newIncome);
      dispatchBalance({ type: "ADD", payload: amount });
    } else if (expense) {
      let newExpense = totalExpense + Number(amount);
      setTotalExpense(newExpense);
      dispatchBalance({ type: "SUBTRACT", payload: amount });
    }
  };

  const AddTransactionItem = (amount, description, expense, income) => {
    handleBalance(amount, income, expense);
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
