import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

export default function AccountCard({
  account_id,
  first_name,
  last_name,
  balance,
  open_date,
  last_activity_date,
  status
}: AccountWithCustomer) {
  return <h3>{`${first_name} ${last_name}`}</h3>;
}
