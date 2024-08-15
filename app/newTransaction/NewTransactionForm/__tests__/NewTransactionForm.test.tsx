import { render, screen } from "@testing-library/react";
import NewTransactionForm from "../NewTransactionForm";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";

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
      <NewTransactionForm onSubmit={handleSubmitForm} customers={customers} />
    );

    const stringCustomerID = String(customer.customer_id);
    const stringTransactionAmount = String(transactionAmount);

    const fromAccount = screen.getByLabelText(
      /from customer/i
    ) as HTMLSelectElement;
    await user.selectOptions(fromAccount, stringCustomerID);

    const toAccount = screen.getByLabelText(
      /to customer/i
    ) as HTMLSelectElement;
    await user.selectOptions(toAccount, stringCustomerID);

    const transactionAmountElement = screen.getByLabelText(
      /amount/i
    ) as HTMLInputElement;
    await user.type(transactionAmountElement, stringTransactionAmount);
    expect(transactionAmountElement).toHaveValue(stringTransactionAmount);
  }
);
