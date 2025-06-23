import { useState } from "react";

function WithdrawForm() {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

  // TODO: add event type to avoid TS error
  const handleWithdraw = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/accounts/${accountId}/withdraw`,
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
      console.log("Withdrawal was successfull:", result);
      setAccountId("");
      setAmount("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Withdraw money</h2>
      <form onSubmit={handleWithdraw}>
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
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default WithdrawForm;
