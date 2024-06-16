import styled from "styled-components";
import AccountProps from "@/app/lib/definitions/AuthorProps";
import Stat from "../Stat";

const Wrapper = styled.div``;

interface BalanceStatsBodyProps {
  accounts: AccountProps[];
}

export default function BalanceStatsBody({ accounts }: BalanceStatsBodyProps) {
  const higherBalance = accounts.reduce((balance, account) => {
    if (account.balance > balance) return account.balance;
    else return balance;
  }, 0);

  const loweBalance = accounts.reduce((balance, account) => {
    if (account.balance < balance) return account.balance;
    else return balance;
  }, Infinity);

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
      <Stat
        title="Bank Total:"
        score={`£ ${totalMoney.toLocaleString()}`}
      />
    </Wrapper>
  );
}
