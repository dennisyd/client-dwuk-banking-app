import { useState, useEffect } from "react";
import AccountProps from "../definitions/AuthorProps";
import toast from "react-hot-toast";

async function fetchAccounts(url: string): Promise<AccountProps[]> {
  const res = await fetch(url);
  if (!res.ok) {
    toast.error("An error occurred while fetching the authors.");
  }
  const accounts: AccountProps[] = await res.json();
  return accounts;
}

export default function useFetchAccounts(url: string) {
  const [accounts, setAccounts] = useState<AccountProps[]>([]);

  useEffect(() => {
    (async () => {
      setAccounts(await fetchAccounts(url));
    })();
  }, [url]);

  return {
    accounts: accounts,
    setAccounts: setAccounts
  };
}
