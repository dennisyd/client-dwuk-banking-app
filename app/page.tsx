"use client";
import API_URL from "@/env";
import useFetchAccounts from "./lib/hooks/useFetchAccounts";

export default function Dashboard() {
  const herokuURL = API_URL + "/accounts";
  const localURL = "http://locahost:4000/accounts";

  const { accounts, setAccounts } = useFetchAccounts(herokuURL);
  return (
    <>
      <h1>Dashboard</h1>
      {accounts.length}
    </>
  );
}
