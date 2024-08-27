import Chance from "chance";
import { AccountWithCustomer } from "../../definitions/account/types/AccountWithCustomer";
import accountStatus from "../../constants/accountStatus";

const some = new Chance();

export default class RandomAccountWithCustomerGenerator {
  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  generate() {
    const accountsWithCustomers: AccountWithCustomer[] = Array.from(
      { length: this.length },
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
    return accountsWithCustomers;
  }
}
