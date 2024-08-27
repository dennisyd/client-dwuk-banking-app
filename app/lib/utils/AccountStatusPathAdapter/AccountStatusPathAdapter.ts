import { AccountStatus } from "../../definitions/account/types/AccountWithCustomer";

export default class AccountStatusPathAdapter {
  adaptPath(status: AccountStatus) {
    return status === "ACTIVE"
      ? "activate"
      : status === "CLOSED"
      ? "close"
      : "freeze";
  }
}
