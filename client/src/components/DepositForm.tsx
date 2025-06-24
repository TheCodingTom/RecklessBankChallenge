import { useState } from "react";

function DepositForm() {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

  const [error, setError] = useState("");

  // TODO: add event type to avoid TS error
  const handleDeposit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/accounts/${accountId}/deposit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Deposit was successfull:", result);
      setAccountId("");
      setAmount("");
    } catch (err) {
      console.error(err);
      setError("Account not found");
    }
  };

  return (
    <div>
      <h2>Deposit money</h2>
      <form onSubmit={handleDeposit}>
        <label>
          Account ID:
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Deposit</button>
      </form>
      {error ? error : ""}
    </div>
  );
}

export default DepositForm;
