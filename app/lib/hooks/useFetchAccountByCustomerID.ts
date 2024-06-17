import { useState, useEffect } from "react";
import AccountProps from "../definitions/AuthorProps";
import toast from "react-hot-toast";

async function fetchAccountByCustomerID(url: string): Promise<AccountProps[]> {
  const res = await fetch(url);
  if (!res.ok) {
    toast.error("An error occurred while fetching the account.");
  }
  const resBody = await res.json();
  const account: AccountProps[] = await JSON.parse(resBody);
  return account;
}

export default function useFetchAccountByCustomerID(url: string) {
  const [account, setAccount] = useState<AccountProps[]>([]);

  useEffect(() => {
    (async () => {
      setAccount(await fetchAccountByCustomerID(url));
    })();
  }, [url]);

  return {
    account: account,
    setAccount: setAccount
  };
}
