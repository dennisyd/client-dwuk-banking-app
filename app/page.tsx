"use client";
import useFetchAccounts from "./lib/hooks/useFetchAccounts";

export default function Dashboard() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllAccountsUrl = apiBaseUrl + "/accounts";

  const { accounts, setAccounts } = useFetchAccounts(fetchAllAccountsUrl);
  return (
    <>
      <h1>Dashboard</h1>
      {accounts}
    </>
  );
}
