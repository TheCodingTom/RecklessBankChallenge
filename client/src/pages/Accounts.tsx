import { useContext, useEffect, useState } from "react";
import { AccountsContext } from "../context/AccountsContext";

/* TODO: Create an AccountContext or a custom hook to centralize account logic
 and trigger updates across components on new accounts, deposits, withdrawals and transfers */

export type AccountType = {
  id: string;
  balance: number;
};

function Accounts() {
  const { accounts, getAccounts } = useContext(AccountsContext);
  // const [accounts, setAccounts] = useState<AccountType[]>([]);
  // const getAccounts = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/accounts", {
  //       method: "GET",
  //     });
  //     const result = await response.json();
  //     console.log("accounts:", result);
  //     setAccounts(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getAccounts();
  // }, []);

  return (
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
  );
}

export default Accounts;
