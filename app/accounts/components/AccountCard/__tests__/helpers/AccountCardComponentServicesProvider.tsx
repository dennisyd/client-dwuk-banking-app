import { render } from "@testing-library/react";
import AccountCard from "../../AccountCard";
import RandomAccountWithCustomerGenerator from "@/app/lib/tests/RandomAccountWithCustomerGenerator/RandomAccountWithCustomerGenerator";

export default class AccountCardComponentServicesProvider {
  private accountsWithCustomerGenerator: RandomAccountWithCustomerGenerator;
  constructor(
    accountsWithCustomersGenerator: RandomAccountWithCustomerGenerator
  ) {
    this.accountsWithCustomerGenerator = accountsWithCustomersGenerator;
  }

  renderComponent() {
    const accountWithCustomer =
      this.accountsWithCustomerGenerator.generateOne();

    const addSelectedAccountsId = jest.fn();
    const deleteSelectedAccountId = jest.fn();
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
  }
}
