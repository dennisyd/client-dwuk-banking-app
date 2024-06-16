import { useState, useEffect } from "react";
import AccountProps from "../definitions/AuthorProps";
import toast from "react-hot-toast";

async function fetchAccounts(url: string): Promise<AccountProps[]> {
  console.log("check 1");
  // const res = await fetch(
  //   "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com/accounts",
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     credentials: "include"
  //   }
  // );
  const res = await fetch(url);
  const headers = res.headers;
  console.log("check 2 => headers", headers);
  if (!res.ok) {
    console.log("check 3");
    toast.error("An error occurred while fetching the authors.");
  }
  console.log("check 4");
  const accounts: AccountProps[] = await res.json();
  console.log("accounts in fetch", accounts);
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
