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

  const loweBalance = accounts
    .reduce((balance, account) => {
      if (account.balance < balance) return account.balance;
      else return balance;
    }, Infinity)
    .toString();

  const totalMoney = accounts
    .reduce((balance, account) => balance + account.balance, 0)
    .toLocaleString();

  return (
    <Wrapper>
      <Stat title="Higher Account Balance:" score={`£ ${higherBalance}`} />
      <Stat title="Lower Account Balance:" score={`£${loweBalance}`} />
      <Stat title="Total Money in the Bank:" score={`£${totalMoney}`} />
    </Wrapper>
  );
}
