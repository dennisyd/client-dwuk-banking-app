import { transactionSchema } from "@/app/lib/schemas/transactionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import { NewTransactionFormSubmitValues } from "@/app/lib/definitions/transaction/types/NewTransactionFormSubmitValues";
import styles from "../newTransaction.module.css";
import Button from "@/app/lib/components/common/Button";
import stylesShared from "../../lib/styles/shared.module.css";
import colours from "@/app/lib/constants/colors";

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
    <div className={styles.formOuterContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInnerContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="from_account_id" className={styles.label}>
              From Account
            </label>
            <select
              id="from_account_id"
              {...register("from_account_id")}
              className={stylesShared.inputElement}
            >
              {customers.map((customer) => (
                <option
                  key={customer.customer_id}
                  value={customer.customer_id}
                >{`${customer.first_name} ${customer.last_name}`}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="to_account_id" className={styles.label}>
              To Account
            </label>
            <select
              id="to_account_id"
              {...register("to_account_id")}
              className={stylesShared.inputElement}
            >
              {customers.map((customer) => (
                <option
                  key={customer.customer_id}
                  value={customer.customer_id}
                >{`${customer.first_name} ${customer.last_name}`}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="amount" className={styles.label}>
              Amount
            </label>
            <input
              id="amount"
              {...register("amount")}
              className={stylesShared.inputElement}
            />
          </div>

          <Button
            type="submit"
            text="New Transaction"
            onClick={() => {}}
            primaryColor={colours.black}
          />
        </div>
      </form>
    </div>
  );
}
