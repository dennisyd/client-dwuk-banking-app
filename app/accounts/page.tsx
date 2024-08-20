"use client";
import { useAccountsWithCustomers } from "../lib/services/queries/queries";
import Spinner from "../lib/components/common/Spinner/Spinner";
import toast from "react-hot-toast";
import AccountCard from "./components/AccountCard/AccountCard";
import accountStyles from "./styles/account.module.css";
import { useState } from "react";

export default function Accounts() {
  const accountsWithCustomers = useAccountsWithCustomers();
  const [accountSelected, setAccountSelected] = useState(false);

  if (accountsWithCustomers.isPending) {
    return <Spinner />;
  }

  if (accountsWithCustomers.isError) {
    return toast.error("An error occurred while fetching accounts");
  }

  return (
    <div>
      <div>
        <h3>Accounts Actions</h3>
        <button>Top-Up Balance</button>
        <button>Update Status</button>
      </div>

      <div className={accountStyles.accountCardsContainer}>
        {accountsWithCustomers.data.map((accountWithCustomer) => (
          <AccountCard
            key={accountWithCustomer.account_id}
            account_id={accountWithCustomer.account_id}
            first_name={accountWithCustomer.first_name}
            last_name={accountWithCustomer.last_name}
            balance={accountWithCustomer.balance}
            open_date={accountWithCustomer.open_date}
            last_activity_date={accountWithCustomer.last_activity_date}
            status={accountWithCustomer.status}
          />
        ))}
      </div>
    </div>
  );
}
