import AccountProps from "@/app/lib/definitions/AuthorProps";
import Stat from "../Stat";
import ScoresWrapper from "@/app/lib/common/dashboard/ScoresWrapper";

interface AccountStatsBodyProps {
  accounts: AccountProps[];
}
export default function AccountStatsBody({ accounts }: AccountStatsBodyProps) {
  const activeAccounts = accounts
    .filter((account) => account.status === "ACTIVE")
    .length.toString();

  const frozenAccounts = accounts
    .filter((account) => account.status === "FROZEN")
    .length.toString();

  const closedAccounts = accounts
    .filter((account) => account.status === "CLOSED")
    .length.toString();
  return (
    <ScoresWrapper>
      <Stat title="Active" score={activeAccounts} />
      <Stat title="Frozen" score={frozenAccounts} />
      <Stat title="Closed" score={closedAccounts} />
      <Stat title="Total" score={accounts.length.toString()} />
    </ScoresWrapper>
  );
}
