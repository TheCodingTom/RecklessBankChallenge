import { createContext, useEffect, useState, type ReactNode } from "react";
import type { AccountType } from "../pages/Accounts";

type AccountsContextProviderProps = {
  children: ReactNode;
};

type AccountsContextType = {
  accounts: AccountType[];
  getAccounts: () => void;
};

const initialValue: AccountsContextType = {
  accounts: [],
  getAccounts: () => {
    throw new Error("Context not initialised");
  },
};

export const AccountsContext = createContext(initialValue);

export const AccountsContextProvider = ({
  children,
}: AccountsContextProviderProps) => {
  const [accounts, setAccounts] = useState<AccountType[]>([]);

  const getAccounts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/accounts", {
        method: "GET",
      });
      const result = await response.json();
      console.log("accounts:", result);
      setAccounts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div>
      <AccountsContext.Provider value={{ accounts, getAccounts }}>
        {children}
      </AccountsContext.Provider>
    </div>
  );
};
