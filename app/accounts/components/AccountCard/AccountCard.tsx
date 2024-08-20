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
  const openDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long"
  }).format(new Date(open_date));

  const lastActiveDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long"
  }).format(new Date(last_activity_date));

  const statusContainerClassName =
    status === "ACTIVE"
      ? accountStyles.activeStatus
      : status === "CLOSED"
      ? accountStyles.closedStatus
      : accountStyles.frozenStatus;

  const statusBubbleClassName =
    status === "ACTIVE"
      ? accountStyles.activeBubble
      : status === "CLOSED"
      ? accountStyles.closedBubble
      : accountStyles.frozenBubble;

  return (
    <div className={accountStyles.accountCard}>
      <div>
        <div className={accountStyles.customerName}>
          <h3>{`${first_name} ${last_name}`}</h3>
        </div>
      </div>

      <div>
        <div className={accountStyles.dataContainer}>
          {"Balance:"}{" "}
          <span className={accountStyles.balanceAmount}>{`£${balance}`}</span>
        </div>

        <div className={accountStyles.dataContainer}>
          {`Opened Since: ${openDate}`}
        </div>

        <div
          className={accountStyles.dataContainer}
        >{`Last Active: ${lastActiveDate}`}</div>
      </div>

      <div className={`${statusContainerClassName} ${accountStyles.status}`}>
        {"Status:"} <span className={`${statusBubbleClassName}`}>{status}</span>
      </div>
    </div>
  );
}
