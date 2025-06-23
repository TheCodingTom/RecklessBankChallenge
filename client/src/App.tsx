import "./App.css";
import AccountForm from "./components/AccountForm";
import DepositForm from "./components/DepositForm";
import TransferForm from "./components/TransferForm";
import WithdrawForm from "./components/WithdrawForm";
import Accounts from "./pages/Accounts";

// TODO: Implement React Router and organize each component/feature into separate pages for better structure and navigation

function App() {
  return (
    <>
      <h1>Fast & Reckless Bank</h1>
      <AccountForm />
      <DepositForm />
      <WithdrawForm />
      <TransferForm />
      <Accounts />
    </>
  );
}

export default App;
