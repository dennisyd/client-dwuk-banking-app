import { transactionSchema } from "@/app/lib/schemas/transactionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";

interface NewTransactionFormSubmitValues {
  from_customer: number;
  to_customer: number;
  amount: number;
}

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
      <label htmlFor="from-account">From Account</label>
      <select id="from-account">
        {customers.map((customer) => (
          <option
            key={customer.customer_id}
            value={customer.customer_id}
          >{`${customer.first_name} ${customer.last_name}`}</option>
        ))}
      </select>

      <label htmlFor="to-account">To Account</label>
      <select id="to-account"></select>
    </form>
  );
}
