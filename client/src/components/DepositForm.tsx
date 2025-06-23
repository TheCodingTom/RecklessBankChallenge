import React, { useState } from "react";

function DepositForm() {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

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
      console.log("Deposit went through:", result);
      setAccountId("");
      setAmount("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
  );
}

export default DepositForm;
