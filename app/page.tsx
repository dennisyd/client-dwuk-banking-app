"use client";
import useFetchAccounts from "./lib/hooks/useFetchAccounts";

export default function Dashboard() {
  const url = process.env.API_URL + "/accounts";
  // const url =
  //   "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com/accounts";
  // const url = "http://locahost:4000/accounts";

  const { accounts, setAccounts } = useFetchAccounts(url);
  return (
    <>
      <h1>Dashboard</h1>
      {accounts}
    </>
  );
}
