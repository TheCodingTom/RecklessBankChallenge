import "./App.css";
import AccountForm from "./components/AccountForm";
import DepositForm from "./components/DepositForm";
import TransferForm from "./components/TransferForm";
import WithdrawForm from "./components/WithdrawForm";
import Accounts from "./pages/Accounts";

/*
  TODO:
  - Add error handling for duplicate account creation
  - Add error handling for deposit/withdraw/transfer (e.g., account not found)
  - Show feedback (success/failure) messages in all forms
  - Move API baseURL to a config or env variable
  - Add context or hook to sync account list updates
  - Implement React Router and split features into separate pages
  - Add general styling
  - Add tests for the backend service methods and frontend components
*/

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
