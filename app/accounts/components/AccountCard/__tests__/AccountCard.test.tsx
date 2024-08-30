import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RandomAccountWithCustomerGenerator from "@/app/lib/tests/RandomAccountWithCustomerGenerator/RandomAccountWithCustomerGenerator";
import AccountCardComponentRenderer from "./helpers/AccountCardComponentRenderer";

const nrOfAccounts = 2;
const accountsWithCustomersGenerator = new RandomAccountWithCustomerGenerator(
  nrOfAccounts
);
const accountsWithCustomers = accountsWithCustomersGenerator.generate();

const addSelectedAccountsId = jest.fn();
const deleteSelectedAccountId = jest.fn();
const handleUpdateAccountStatus = jest.fn();

test.each(accountsWithCustomers)(
  "if the AccountCard component displays the data correctly",
  async (accountWithCustomer) => {
    const accountCardComponentRenderer = new AccountCardComponentRenderer({
      accountWithCustomer,
      addSelectedAccountsId,
      deleteSelectedAccountId,
      handleUpdateAccountStatus
    });
    accountCardComponentRenderer.render();

    const firstAndLastName = screen.getByText(
      `${accountWithCustomer.first_name} ${accountWithCustomer.last_name}`
    );

    const balanceRegExp = new RegExp(String(accountWithCustomer.balance), "i");
    const balance = screen.getByText(balanceRegExp);

    expect(firstAndLastName).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  }
);

test.each(accountsWithCustomers)(
  "if accounts selection works as intended",
  async (accountWithCustomer) => {
    const accountCardComponentRenderer = new AccountCardComponentRenderer({
      accountWithCustomer,
      addSelectedAccountsId,
      deleteSelectedAccountId,
      handleUpdateAccountStatus
    });
    accountCardComponentRenderer.render();

    const user = userEvent.setup();
    const accountCard = screen.getByTestId(
      `account-card-${accountWithCustomer.account_id}`
    ) as HTMLDivElement;

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

test("if account status changes as required", async () => {
  const accountWithCustomer = accountsWithCustomersGenerator.generateOne();
  const accountCardComponentRenderer = new AccountCardComponentRenderer({
    accountWithCustomer,
    addSelectedAccountsId,
    deleteSelectedAccountId,
    handleUpdateAccountStatus
  });

  accountCardComponentRenderer.render();

  const accountCard = screen.getByTestId(
    `account-card-${accountWithCustomer.account_id}`
  ) as HTMLDivElement;

  const user = userEvent.setup();
  await user.click(accountCard);

  const activateButton = screen.getByRole("button", { name: "Activate" });
  await user.click(activateButton);
});
