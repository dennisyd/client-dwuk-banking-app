import accountStyles from "../../../accounts/styles/accountCard.module.css";
import { AccountStatus } from "../../definitions/account/types/AccountWithCustomer";

export default class CssClassGenerator {
  generateStatusContainerClass(status: AccountStatus) {
    return status === "ACTIVE"
      ? accountStyles.activeStatus
      : status === "CLOSED"
      ? accountStyles.closedStatus
      : accountStyles.frozenStatus;
  }

  generateStatusBubbleClass(status: AccountStatus) {
    return status === "ACTIVE"
      ? accountStyles.activeBubble
      : status === "CLOSED"
      ? accountStyles.closedBubble
      : accountStyles.frozenBubble;
  }
}
