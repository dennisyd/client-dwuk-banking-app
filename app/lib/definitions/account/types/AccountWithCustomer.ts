export interface AccountWithCustomer {
  account_id: number;
  first_name: string;
  last_name: string;
  balance: number;
  open_date: string;
  last_activity_date: string;
  status: "ACTIVE" | "CLOSED" | "FROZEN";
}
