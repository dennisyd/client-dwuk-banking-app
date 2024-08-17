"use client";
import { useAccountsWithCustomers } from "../lib/services/queries/queries";
import Spinner from "../lib/components/common/Spinner/Spinner";
import toast from "react-hot-toast";

export default function Accounts() {
  const accountsWithCustomers = useAccountsWithCustomers();

  if (accountsWithCustomers.isPending) {
    return <Spinner />;
  }

  if (accountsWithCustomers.isError) {
    return toast.error("An error occurred while fetching accounts");
  }

  return <h1>Accounts Page</h1>;
}
