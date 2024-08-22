import accountStatus from "@/app/lib/constants/accountStatus";
import stylesChangeAccountStatus from "../../styles/changeAccountStatus.module.css";
import Button from "@/app/lib/components/common/Button";

export default function ChangeAccountsStatus() {
  return (
    <div className={stylesChangeAccountStatus.accountActionsOuterContainer}>
      <div>Change Accounts Status to:</div>

      <div className={stylesChangeAccountStatus.actionButtonsContainer}>
        {accountStatus.map((status, i) => (
          <Button key={i} type="button" text={status} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}
