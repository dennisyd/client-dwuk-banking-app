import accountStyles from "../../../accounts/styles/accountCard.module.css";

export default class CssClassGenerator {
  generateStatusContainerClass(status: "ACTIVE" | "CLOSED" | "FROZEN") {
    return status === "ACTIVE"
      ? accountStyles.activeStatus
      : status === "CLOSED"
      ? accountStyles.closedStatus
      : accountStyles.frozenStatus;
  }

  generateStatusBubbleClass(status: "ACTIVE" | "CLOSED" | "FROZEN") {
    return status === "ACTIVE"
      ? accountStyles.activeBubble
      : status === "CLOSED"
      ? accountStyles.closedBubble
      : accountStyles.frozenBubble;
  }
}
