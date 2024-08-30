"use client";
import { useAccountsWithCustomers } from "../lib/services/queries/queries";
import Spinner from "../lib/components/common/Spinner/Spinner";
import toast from "react-hot-toast";
import AccountCard from "./components/AccountCard/AccountCard";
import accountStyles from "./styles/accountCard.module.css";
import { useState } from "react";
import UpdateAccountsStatus from "./components/UpdateAccountsStatus/UpdateAccountsStatus";
import { AccountStatus } from "../lib/definitions/account/types/AccountWithCustomer";
import { usePutAccountsStatus } from "../lib/services/mutations/mutations";

export default function Accounts() {
  const accountsWithCustomers = useAccountsWithCustomers();
  const putAccountStatusMutation = usePutAccountsStatus();
  const [selectedAccountsId, setSelectedAccountsId] = useState<number[]>([]);

  if (accountsWithCustomers.isPending) {
    return <Spinner />;
  }

  if (accountsWithCustomers.isError) {
    return toast.error("An error occurred while fetching accounts");
  }

  function addSelectedAccountsId(accountId: number) {
    setSelectedAccountsId([...selectedAccountsId, accountId]);
  }

  function deleteSelectedAccountsIs(accountId: number) {
    const newSelectedAccountsId = selectedAccountsId.filter(
      (selectedAccountId) => {
        if (selectedAccountId !== accountId) return selectedAccountId;
      }
    );
    setSelectedAccountsId(newSelectedAccountsId);
  }

  function updateAccountStatus(newStatus: AccountStatus) {
    putAccountStatusMutation.mutate({
      accountIDs: selectedAccountsId,
      status: newStatus
    });
  }

  return (
    <div>
      {selectedAccountsId.length > 1 ? (
        <UpdateAccountsStatus onUpdateAccountStatus={updateAccountStatus} />
      ) : null}
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
            onAddSelectedAccountId={addSelectedAccountsId}
            onDeleteSelectedAccountId={deleteSelectedAccountsIs}
            onUpdateAccountStatus={updateAccountStatus}
          />
        ))}
      </div>
    </div>
  );
}
