import { useState } from "react";

function TransferForm() {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");

  // TODO: add event type to avoid TS error
  const handleTransfer = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/accounts/${fromId}/transfer/${toId}`,
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
      console.log("Transfer was successfull:", result);
      setFromId("");
      setToId("");
      setAmount("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Send money</h2>
      <form onSubmit={handleTransfer}>
        <label>
          From account ID:
          <input
            type="text"
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            required
          />
        </label>
        <label>
          To account ID:
          <input
            type="text"
            value={toId}
            onChange={(e) => setToId(e.target.value)}
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default TransferForm;
