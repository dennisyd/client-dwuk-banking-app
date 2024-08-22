import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountCard from "../AccountCard";
import RandomAccountWithCustomerGenerator from "@/app/lib/tests/RandomAccountWithCustomerGenerator/RandomAccountWithCustomerGenerator";

const nrOfAccounts = 10;
const accountsWithCustomersGenerator = new RandomAccountWithCustomerGenerator(
  nrOfAccounts
);
const accountsWithCustomers = accountsWithCustomersGenerator.generate();

const addSelectedAccountsId = jest.fn();
const deleteSelectedAccountId = jest.fn();

test.each(accountsWithCustomers)(
  "if the AccountCard component displays the data correctly",
  async (accountWithCustomer) => {
    render(
      <AccountCard
        account_id={accountWithCustomer.account_id}
        first_name={accountWithCustomer.first_name}
        last_name={accountWithCustomer.last_name}
        balance={accountWithCustomer.balance}
        open_date={accountWithCustomer.open_date}
        last_activity_date={accountWithCustomer.last_activity_date}
        status={accountWithCustomer.status}
        onAddSelectedAccountId={addSelectedAccountsId}
        onDeleteSelectedAccountId={deleteSelectedAccountId}
      />
    );

    const firstAndLastName = screen.getByText(
      `${accountWithCustomer.first_name} ${accountWithCustomer.last_name}`
    );

    const balanceRegExp = new RegExp(String(accountWithCustomer.balance), "i");
    const balance = screen.getByText(balanceRegExp);

    expect(firstAndLastName).toBeInTheDocument();
    expect(balance).toBeInTheDocument();

    const user = userEvent.setup();
    const accountCard = screen.getByTestId("account-card") as HTMLDivElement;

    await user.click(accountCard);
    expect(addSelectedAccountsId.mock.calls[0][0]).toBe(
      accountWithCustomer.account_id
    );

    await user.click(accountCard);
    expect(deleteSelectedAccountId.mock.calls[0][0]).toBe(
      accountWithCustomer.account_id
    );
  }
);
