import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";
import accountStyles from "../../styles/account.module.css";

export default function AccountCard({
  account_id,
  first_name,
  last_name,
  balance,
  open_date,
  last_activity_date,
  status
}: AccountWithCustomer) {
  return (
    <div className={accountStyles.accountCard}>
      <div className={accountStyles.customerName}>
        <h3>{`${first_name} ${last_name}`}</h3>
      </div>
    </div>
  );
}
