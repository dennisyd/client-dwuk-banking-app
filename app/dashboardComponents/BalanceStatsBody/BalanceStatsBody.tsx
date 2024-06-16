import styled from "styled-components";
import AccountProps from "@/app/lib/definitions/AuthorProps";
import Stat from "../Stat";

const Wrapper = styled.div``;

interface BalanceStatsBodyProps {
  accounts: AccountProps[];
}

export default function BalanceStatsBody({ accounts }: BalanceStatsBodyProps) {
  const higherBalance = accounts
    .reduce((balance, account) => {
      if (account.balance > balance) return account.balance;
      else return balance;
    }, 0)
    .toString();
  return (
    <Wrapper>
      <Stat title="Higher Account Balance" score={higherBalance} />
    </Wrapper>
  );
}
