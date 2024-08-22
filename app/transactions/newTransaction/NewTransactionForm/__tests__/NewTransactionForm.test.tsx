import { render, screen } from "@testing-library/react";
import NewTransactionForm from "../NewTransactionForm";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";
import RandomAccountWithCustomerGenerator from "@/app/lib/tests/RandomAccountWithCustomerGenerator/RandomAccountWithCustomerGenerator";

type Amount = number;
type AccountsWithCustomersAndTransactions = [AccountWithCustomer, Amount][];

const some = new Chance();
const nrOfAccounts = 10;

const accountsWithCustomersGenerator = new RandomAccountWithCustomerGenerator(
  nrOfAccounts
);
const accountsWithCustomers = accountsWithCustomersGenerator.generate();

const transactionAmounts = Array.from({ length: nrOfAccounts }, () => {
  const amount: Amount = some.floating({ min: 1, max: 20000, fixed: 2 });
  return amount;
});

const accountsWithCustomersAndTransactions: AccountsWithCustomersAndTransactions =
  Array.from({ length: nrOfAccounts }, (_, i) => {
    return [accountsWithCustomers[i], transactionAmounts[i]];
  });

test.each(accountsWithCustomersAndTransactions)(
  "if input value changes when user operates the form",
  async (accountWithCustomer, transactionAmount) => {
    const user = userEvent.setup();
    const handleSubmitForm = jest.fn();

    render(
      <NewTransactionForm
        onSubmit={handleSubmitForm}
        accountsWithCustomers={accountsWithCustomers}
      />
    );

    const stringAccountID = String(accountWithCustomer.account_id);
    const stringTransactionAmount = String(transactionAmount);

    const fromAccount = screen.getByLabelText(
      /from account/i
    ) as HTMLSelectElement;
    await user.selectOptions(fromAccount, stringAccountID);

    const toAccount = screen.getByLabelText(/to account/i) as HTMLSelectElement;
    await user.selectOptions(toAccount, stringAccountID);

    const transactionAmountElement = screen.getByLabelText(
      /amount/i
    ) as HTMLInputElement;
    await user.type(transactionAmountElement, stringTransactionAmount);
    expect(transactionAmountElement).toHaveValue(stringTransactionAmount);
  }
);
