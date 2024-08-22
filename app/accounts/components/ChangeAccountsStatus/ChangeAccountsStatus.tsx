import accountStatus from "@/app/lib/constants/accountStatus";
import stylesChangeAccountStatus from "../../styles/changeAccountStatus.module.css";
import Button from "@/app/lib/components/common/Button";
import colours from "@/app/lib/constants/colors";

export default function ChangeAccountsStatus() {
  return (
    <div className={stylesChangeAccountStatus.accountActionsOuterContainer}>
      <div>Change Accounts Status to:</div>

      <div className={stylesChangeAccountStatus.actionButtonsContainer}>
        {accountStatus.map((status, i) => (
          <Button
            key={i}
            type="button"
            text={status}
            onClick={() => {}}
            primaryColor={
              status === "ACTIVE"
                ? colours.activeBubbleColor
                : status === "CLOSED"
                ? colours.closedBubbleColor
                : colours.frozenBubbleColor
            }
          />
        ))}
      </div>
    </div>
  );
}
