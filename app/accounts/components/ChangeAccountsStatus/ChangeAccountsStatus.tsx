import accountStatus from "@/app/lib/constants/accountStatus";
import stylesChangeAccountStatus from "../../styles/changeAccountStatus.module.css";

export default function ChangeAccountsStatus() {
  return (
    <div className={stylesChangeAccountStatus.accountActionsOuterContainer}>
      <div>Change Accounts Status to:</div>

      <div className={stylesChangeAccountStatus.actionButtonsContainer}>
        {accountStatus.map((status, i) => (
          <button key={i}>{status}</button>
        ))}
      </div>
    </div>
  );
}
