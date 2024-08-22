import { AccountStatus } from "./AccountWithCustomer";

export default interface PutAccountStatus {
  accountIds: number[];
  status: AccountStatus;
}
