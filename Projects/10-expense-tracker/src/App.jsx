import "./App.css";

import Balance from "./components/Balance";
import ExpenseAndIncome from "./components/ExpenseAndncome";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import BalanceContextProvider from "./store/balance-store";

function App() {
  return (
    <BalanceContextProvider>
      <div className="main">
        <Header />
        <Balance />
        <ExpenseAndIncome />
        <Transactions />
      </div>
    </BalanceContextProvider>
  );
}

export default App;
