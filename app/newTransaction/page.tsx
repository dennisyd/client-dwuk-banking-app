"use client";
import NewTransactionForm from "./NewTransactionForm/NewTransactionForm";
import Spinner from "../lib/components/common/Spinner/Spinner";
import toast from "react-hot-toast";
import { SubmitHandler } from "react-hook-form";
import { NewTransactionFormSubmitValues } from "../lib/definitions/transaction/types/NewTransactionFormSubmitValues";
import styles from "./newTransaction.module.css";
import { Header } from "../lib/components/common/formComponents/formComponents";
import { usePostTransaction } from "../lib/services/mutations/mutations";
import { useAccountsWithCustomers } from "../lib/services/queries/queries";

export default function NewTransaction() {
  const postTransactionMutation = usePostTransaction();

  const handleSubmitNewTransactionForm: SubmitHandler<
    NewTransactionFormSubmitValues
  > = (newTransaction) => {
    postTransactionMutation.mutate(newTransaction);
  };

  const accountsWithCustomers = useAccountsWithCustomers();

  if (accountsWithCustomers.isPending) {
    return <Spinner />;
  }

  if (accountsWithCustomers.isError) {
    return toast.error("An error occurred while fetching accounts");
  }
  return (
    <div className={styles.pageContainer}>
      <Header>New Transaction</Header>
      <NewTransactionForm
        accountsWithCustomers={accountsWithCustomers.data}
        onSubmit={handleSubmitNewTransactionForm}
      />
    </div>
  );
}
