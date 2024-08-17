import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  from_account_id: yup
    .number()
    .required("From Customer Account is a required field")
    .integer()
    .positive()
    .test({
      name: "equal-to-to-account-id",
      message: "Destination accounts cannot be the same",
      test: (value, context) => value !== context.parent.to_account_id
    }),
  to_account_id: yup
    .number()
    .required("To Customer Account is a required field")
    .integer()
    .positive()
    .test({
      name: "equal-to-from-account-id",
      message: "Destination accounts cannot be the same",
      test: (value, context) => value !== context.parent.from_account_id
    }),
  amount: yup
    .number()
    .typeError("Required filed")
    .defined("Transaction Amount is a required filed")
    .min(1, "Must be at least £1")
    .max(20000, "Max transaction amount is £20,000")
    .required("Transaction Amount is a required field")
    .positive("Must be positive")
});
