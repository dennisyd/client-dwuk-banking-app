import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";
import accountStyles from "../../styles/account.module.css";
import DateTimeFormatter from "@/app/lib/utils/DateTimeFormatter/DateTimeFormatter";
import CssClassGenerator from "@/app/lib/utils/CssClassGenerator/CssClassGenerator";
import { Dispatch, SetStateAction } from "react";

interface AccountCard extends AccountWithCustomer {
  accountSelected: boolean;
  setAccountSelected: Dispatch<SetStateAction<boolean>>;
}

export default function AccountCard({
  account_id,
  first_name,
  last_name,
  balance,
  open_date,
  last_activity_date,
  status
}: AccountCard) {
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
    <div className={accountStyles.accountCard}>
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
      </div>
    </div>
  );
}
