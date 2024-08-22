import accountStatus from "@/app/lib/constants/accountStatus";

export default function ChangeAccountsStatus() {
  return (
    <div>
      Change Accounts Status to:
      {accountStatus.map((status, i) => (
        <button key={i}>{status}</button>
      ))}
    </div>
  );
}
