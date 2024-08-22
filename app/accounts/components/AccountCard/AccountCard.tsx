import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";
import accountStyles from "../../styles/accountCard.module.css";
import DateTimeFormatter from "@/app/lib/utils/DateTimeFormatter/DateTimeFormatter";
import CssClassGenerator from "@/app/lib/utils/CssClassGenerator/CssClassGenerator";
import { useState } from "react";

interface AccountCardProps extends AccountWithCustomer {
  onAddSelectedAccountId: (accountId: number) => void;
  onDeleteSelectedAccountId: (accountId: number) => void;
}

export default function AccountCard({
  account_id,
  first_name,
  last_name,
  balance,
  open_date,
  last_activity_date,
  status,
  onAddSelectedAccountId,
  onDeleteSelectedAccountId
}: AccountCardProps) {
  const [accountSelected, setAccountSelected] = useState(false);

  const dateTimeFormatter = new DateTimeFormatter();

  const openDate = dateTimeFormatter.gbDayMonthYearLongFormat(open_date);

  const lastActiveDate =
    dateTimeFormatter.gbDayMonthYearLongFormat(last_activity_date);

  const cssClassGenerator = new CssClassGenerator();

  const statusContainerClassName =
    cssClassGenerator.generateStatusContainerClass(status);

  const statusBubbleClassName =
    cssClassGenerator.generateStatusBubbleClass(status);

  return (
    <div
      data-testid="account-card"
      className={accountStyles.accountCard}
      onClick={() => {
        setAccountSelected(!accountSelected);
        if (!accountSelected) {
          onAddSelectedAccountId(account_id);
        } else {
          onDeleteSelectedAccountId(account_id);
        }
      }}
    >
      <div>
        <div className={accountStyles.customerName}>
          <h3>{`${first_name} ${last_name}`}</h3>
        </div>
      </div>

      <div>
        <div className={accountStyles.dataContainer}>
          {"Balance:"}{" "}
          <span className={accountStyles.balanceAmount}>{`£${balance.toFixed(
            2
          )}`}</span>
          {accountSelected && <button>Top-Up Balance</button>}
        </div>

        <div className={accountStyles.dataContainer}>
          {`Opened Since: ${openDate}`}
        </div>

        <div
          className={accountStyles.dataContainer}
        >{`Last Active: ${lastActiveDate}`}</div>
      </div>

      <div className={`${statusContainerClassName} ${accountStyles.status}`}>
        {"Account Status:"}{" "}
        <span className={`${statusBubbleClassName} ${accountStyles.bubble}`}>
          {status}
        </span>
        {accountSelected && <button>Update Status</button>}
      </div>
    </div>
  );
}
