import { transactionSchema } from "@/app/lib/schemas/transactionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import { NewTransactionFormSubmitValues } from "@/app/lib/definitions/transaction/types/NewTransactionFormSubmitValues";

interface NewTransactionFormProps {
  customers: CustomerProps[];
  onSubmit: (transaction: NewTransactionFormSubmitValues) => void;
}

export default function NewTransactionForm({
  customers,
  onSubmit
}: NewTransactionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewTransactionFormSubmitValues>({
    resolver: yupResolver(transactionSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="from-customer">From Customer</label>
      <select id="from-customer" {...register("from_customer")}>
        {customers.map((customer) => (
          <option
            key={customer.customer_id}
            value={customer.customer_id}
          >{`${customer.first_name} ${customer.last_name}`}</option>
        ))}
      </select>

      <label htmlFor="to-customer">To Customer</label>
      <select id="to-customer" {...register("to_customer")}>
        {customers.map((customer) => (
          <option
            key={customer.customer_id}
            value={customer.customer_id}
          >{`${customer.first_name} ${customer.last_name}`}</option>
        ))}
      </select>

      <label htmlFor="amount">Amount</label>
      <input id="amount" {...register("amount")} />
    </form>
  );
}
