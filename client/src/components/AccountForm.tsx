import { useState } from "react";

export default function AccountForm() {
  const [accountId, setAccountId] = useState("");

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
      setAccountId("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
  );
}
