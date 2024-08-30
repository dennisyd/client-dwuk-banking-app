import accountStatus from "@/app/lib/constants/accountStatus";
import stylesChangeAccountStatus from "../../styles/updateAccountStatus.module.css";
import Button from "@/app/lib/components/common/Button";
import colours from "@/app/lib/constants/colors";
import { AccountStatus } from "@/app/lib/definitions/account/types/AccountWithCustomer";

interface UpdateAccountsStatusProps {
  onUpdateAccountStatus: (status: AccountStatus) => void;
}

export default function UpdateAccountsStatus({
  onUpdateAccountStatus
}: UpdateAccountsStatusProps) {
  return (
    <div className={stylesChangeAccountStatus.accountActionsOuterContainer}>
      <div className={stylesChangeAccountStatus.actionButtonsContainer}>
        {accountStatus.map((status, i) => (
          <Button
            key={i}
            type="button"
            text={
              status === "ACTIVE"
                ? "Activate"
                : status === "CLOSED"
                ? "Close"
                : "Freeze"
            }
            onClick={() => {
              onUpdateAccountStatus(status);
            }}
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
