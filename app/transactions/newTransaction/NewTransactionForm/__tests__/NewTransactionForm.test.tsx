import { render, screen } from "@testing-library/react";
import NewTransactionForm from "../NewTransactionForm";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

type Amount = number;
type CustomersWithTransactions = [CustomerProps, Amount][];

const some = new Chance();
const nrOfCustomers = 10;

const customers: CustomerProps[] = Array.from({ length: nrOfCustomers }, () => {
  const customer: CustomerProps = {
    customer_id: some.integer({ min: 1, max: 32000 }),
    officer_id: 1,
    first_name: some.first(),
    last_name: some.last(),
    email: some.email()
  };

  return customer;
});

const accountStatus = ["ACTIVE", "CLOSED", "FROZEN"] as const;

const accountsWithCustomers: AccountWithCustomer[] = Array.from(
  { length: nrOfCustomers },
  () => {
    const accountWithCustomer: AccountWithCustomer = {
      account_id: some.integer({ min: 1, max: 32000 }),
      first_name: some.first(),
      last_name: some.last(),
      balance: some.floating({ min: 1, max: 20000, fixed: 2 }),
      open_date: some.date().toISOString(),
      last_activity_date: some.date().toISOString(),
      status: accountStatus[some.integer({ min: 0, max: 2 })]
    };
    return accountWithCustomer;
  }
);

const transactionAmounts = Array.from({ length: nrOfCustomers }, () => {
  const amount: Amount = some.integer({ min: 1, max: 20000 });
  return amount;
});

const customersWithTransactions: CustomersWithTransactions = Array.from(
  { length: nrOfCustomers },
  (_, i) => {
    return [customers[i], transactionAmounts[i]];
  }
);
test.each(customersWithTransactions)(
  "if input value changes when user operates the form",
  async (customer, transactionAmount) => {
    const user = userEvent.setup();
    const handleSubmitForm = jest.fn();

    render(
      <NewTransactionForm
        onSubmit={handleSubmitForm}
        accountsWithCustomers={accountsWithCustomers}
      />
    );

    const stringCustomerID = String(customer.customer_id);
    const stringTransactionAmount = String(transactionAmount);

    const fromAccount = screen.getByLabelText(
      /from account/i
    ) as HTMLSelectElement;
    await user.selectOptions(fromAccount, stringCustomerID);

    const toAccount = screen.getByLabelText(
      /to account/i
    ) as HTMLSelectElement;
    await user.selectOptions(toAccount, stringCustomerID);

    const transactionAmountElement = screen.getByLabelText(
      /amount/i
    ) as HTMLInputElement;
    await user.type(transactionAmountElement, stringTransactionAmount);
    expect(transactionAmountElement).toHaveValue(stringTransactionAmount);
  }
);
