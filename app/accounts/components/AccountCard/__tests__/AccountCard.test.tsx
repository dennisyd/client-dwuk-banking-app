import { render, screen } from "@testing-library/react";
import AccountCard from "../AccountCard";
import Chance from "chance";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

const some = new Chance();
const accountStatus = ["ACTIVE", "CLOSED", "FROZEN"] as const;

const accountsWithCustomers: AccountWithCustomer[] = Array.from(
  { length: 10 },
  () => {
    const someDate = new Date(some.date({ year: 2024 })).toISOString();
    const accountWithCustomer: AccountWithCustomer = {
      account_id: some.integer({ min: 1, max: 32000 }),
      first_name: some.first(),
      last_name: some.last(),
      balance: some.integer({ min: 100, max: 1000 }),
      open_date: someDate,
      last_activity_date: someDate,
      status: accountStatus[some.integer({ min: 0, max: 2 })]
    };
    return accountWithCustomer;
  }
);

const addSelectedAccountsId = jest.fn();

test.each(accountsWithCustomers)(
  "if the AccountCard component displays the data correctly",
  (accountWithCustomer) => {
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
      />
    );

    const firstAndLastName = screen.getByText(
      `${accountWithCustomer.first_name} ${accountWithCustomer.last_name}`
    );
    const balance = screen.getByText(
      `Balance: £${accountWithCustomer.balance}`
    );
    expect(firstAndLastName).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  }
);
