import { AccountStatus } from "./AccountWithCustomer";

export default interface PutAccountStatus {
  accountIDs: number[];
  status: AccountStatus;
}
