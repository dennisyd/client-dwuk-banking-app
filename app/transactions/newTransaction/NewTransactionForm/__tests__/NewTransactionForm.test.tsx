import { render, screen } from "@testing-library/react";
import NewTransactionForm from "../NewTransactionForm";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

type Amount = number;
type AccountsWithCustomersAndTransactions = [AccountWithCustomer, Amount][];

const some = new Chance();
const nrOfCustomers = 10;

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

const accountsWithCustomersAndTransactions: AccountsWithCustomersAndTransactions =
  Array.from({ length: nrOfCustomers }, (_, i) => {
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
