import "./App.css";
import AccountForm from "./components/AccountForm";
import DepositForm from "./components/DepositForm";
import TransferForm from "./components/TransferForm";
import WithdrawForm from "./components/WithdrawForm";

function App() {
  return (
    <>
      <h1>Fast & Reckless Bank</h1>
      <AccountForm />
      <DepositForm />
      <WithdrawForm />
      <TransferForm />
    </>
  );
}

export default App;
