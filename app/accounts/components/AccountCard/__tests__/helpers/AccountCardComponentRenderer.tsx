import { render } from "@testing-library/react";
import AccountCard from "../../AccountCard";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

export default class AccountCardComponentRenderer {
  private accountWithCustomer: AccountWithCustomer;
  private addSelectedAccountsId: jest.Mock;
  private deleteSelectedAccountId: jest.Mock;

  constructor(
    accountWithCustomer: AccountWithCustomer,
    addSelectedAccountsId: jest.Mock,
    deleteSelectedAccountId: jest.Mock
  ) {
    this.accountWithCustomer = accountWithCustomer;
    this.addSelectedAccountsId = addSelectedAccountsId;
    this.deleteSelectedAccountId = deleteSelectedAccountId;
  }

  renderComponent() {
    render(
      <AccountCard
        account_id={this.accountWithCustomer.account_id}
        first_name={this.accountWithCustomer.first_name}
        last_name={this.accountWithCustomer.last_name}
        balance={this.accountWithCustomer.balance}
        open_date={this.accountWithCustomer.open_date}
        last_activity_date={this.accountWithCustomer.last_activity_date}
        status={this.accountWithCustomer.status}
        onAddSelectedAccountId={this.addSelectedAccountsId}
        onDeleteSelectedAccountId={this.deleteSelectedAccountId}
      />
    );
  }
}
