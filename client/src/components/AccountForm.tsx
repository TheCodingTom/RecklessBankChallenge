import { useContext, useState } from "react";
import { AccountsContext } from "../context/AccountsContext";

export default function AccountForm() {
  const [accountId, setAccountId] = useState("");

  const { accounts, getAccounts } = useContext(AccountsContext);

  // TODO: add event type to avoid TS error
  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: accountId }),
      });

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Created account:", result);
      getAccounts();
      setAccountId("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Create account</h2>
      <form onSubmit={handleCreateAccount}>
        <label>
          Account ID:
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>

      <div>
        <h2>Accounts</h2>
        <ul>
          {accounts &&
            accounts.map((account) => (
              <li key={account.id}>
                ID: {account.id} - Balance: {account.balance}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
