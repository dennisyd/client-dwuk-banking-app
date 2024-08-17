import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  from_account_id: yup
    .number()
    .required("From Customer Account is a required field")
    .integer()
    .positive(),
  to_account_id: yup
    .number()
    .required("To Customer Account is a required field")
    .integer()
    .positive(),
  amount: yup
    .number()
    .min(1, "Must be at least £1")
    .max(20000, "Max transaction amount is £20,000")
    .required("Transaction Amount is a required field")
    .positive("Must be positive")
});
