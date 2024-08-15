"use client";
import NewTransactionForm from "./NewTransactionForm/NewTransactionForm";
import { useCustomers } from "../lib/services/queries/queries";
import Spinner from "../lib/components/common/Spinner/Spinner";
import toast from "react-hot-toast";

export default function NewTransaction() {
  function handleSubmitNewTransactionForm() {}

  const customers = useCustomers();

  if (customers.isPending) {
    return <Spinner />;
  }

  if (customers.isError) {
    return toast.error("An error occurred while fetching customers");
  }

  return (
    <div>
      <h1>New Transaction</h1>
      <NewTransactionForm
        customers={customers.data}
        onSubmit={handleSubmitNewTransactionForm}
      />
    </div>
  );
}
