import styled from "styled-components";
import AccountProps from "@/app/lib/definitions/AuthorProps";
import Stat from "../Stat";
import getHigherBalanceAccount from "@/app/lib/utils/balances/getHigherBalanceAccount";
import getLowerBalanceAccount from "@/app/lib/utils/balances/getLowerBalanceAccount";

const Wrapper = styled.div``;

interface BalanceStatsBodyProps {
  accounts: AccountProps[];
}

export default function BalanceStatsBody({ accounts }: BalanceStatsBodyProps) {
  const higherBalance = getHigherBalanceAccount(accounts);

  const loweBalance = getLowerBalanceAccount(accounts);

  const totalMoney = accounts.reduce(
    (balance, account) => balance + account.balance,
    0
  );

  const averageBalance = totalMoney / accounts.length;

  return (
    <Wrapper>
      <Stat
        title="Top Balance:"
        score={`£ ${higherBalance.toLocaleString()}`}
      />
      <Stat
        title="Lower Balance:"
        score={`£ ${loweBalance.toLocaleString()}`}
      />
      <Stat title="Average:" score={`£ ${averageBalance.toLocaleString()}`} />
      <Stat title="Bank Total:" score={`£ ${totalMoney.toLocaleString()}`} />
    </Wrapper>
  );
}
