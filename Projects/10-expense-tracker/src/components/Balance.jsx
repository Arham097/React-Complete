import { useContext } from "react";
import { BalanceContext } from "../store/balance-store";
import { useRef } from "react";

const Balance = () => {
  const { AddTransactionItem, balance } = useContext(BalanceContext);
  const { toggle, toggleHandler } = useContext(BalanceContext);
  const amount = useRef();
  const description = useRef();
  const income = useRef();
  const expense = useRef();

  const addTransaction = () => {
    const itemAmount = amount.current.value;
    const itemDescription = description.current.value;
    const itemIncome = expense.current.checked;
    const itemExpense = income.current.checked;
    AddTransactionItem(itemAmount, itemDescription, itemIncome, itemExpense);
    amount.current.value = "";
    description.current.value = "";
    income.current.checked = false;
    expense.current.checked = false;
  };

  return (
    <>
      <div className="balance">
        <h2>Balance: {balance} Rs </h2>
        {!toggle ? (
          <button className="toggle_button" onClick={toggleHandler}>
            ADD
          </button>
        ) : (
          <button className="toggle_button" onClick={toggleHandler}>
            CANCEL
          </button>
        )}
      </div>
      {toggle && (
        <div className="add_transaction">
          <div className="upper">
            <input
              type="text"
              placeholder="Amount"
              className="upper_input"
              ref={amount}
            />
            <input
              type="text"
              placeholder="Description"
              className="upper_input"
              ref={description}
            />
            <div className="radios">
              <input
                type="radio"
                name="type"
                value={"Expense"}
                id="expense"
                ref={expense}
              />
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                name="type"
                value={"Income"}
                id="income"
                ref={income}
              />
              <label htmlFor="income">Income</label>
            </div>
          </div>
          <div className="lower">
            <button className="trasaction_but" onClick={addTransaction}>
              Add Transactions
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Balance;
