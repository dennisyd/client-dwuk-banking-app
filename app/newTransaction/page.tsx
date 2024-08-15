"use client";
import NewTransactionForm from "./NewTransactionForm/NewTransactionForm";
import { useCustomers } from "../lib/services/queries/queries";
import Spinner from "../lib/components/common/Spinner/Spinner";
import toast from "react-hot-toast";
import { SubmitHandler } from "react-hook-form";
import { NewTransactionFormSubmitValues } from "../lib/definitions/transaction/types/NewTransactionFormSubmitValues";
import styles from "./newTransaction.module.css";
import { Header } from "../lib/components/common/formComponents/formComponents";

export default function NewTransaction() {
  const handleSubmitNewTransactionForm: SubmitHandler<
    NewTransactionFormSubmitValues
  > = (newTransaction) => {};

  const customers = useCustomers();

  if (customers.isPending) {
    return <Spinner />;
  }

  if (customers.isError) {
    return toast.error("An error occurred while fetching customers");
  }

  return (
    <div className={styles.pageContainer}>
      <Header>New Transaction</Header>
      <NewTransactionForm
        customers={customers.data}
        onSubmit={handleSubmitNewTransactionForm}
      />
    </div>
  );
}
