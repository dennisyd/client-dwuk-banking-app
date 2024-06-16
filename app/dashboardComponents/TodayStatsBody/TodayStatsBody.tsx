import styled from "styled-components";
import TransactionProps from "@/app/lib/definitions/TransactionProps";
import Stat from "../Stat";
import getTodaysTransactions from "@/app/lib/utils/getTodaysTransactions";

const Wrapper = styled.div``;

interface TodayStatsBodyProps {
  transactions: TransactionProps[];
}

export default function TodayStatsBody({ transactions }: TodayStatsBodyProps) {
  const todaysTransactions = getTodaysTransactions(transactions);

  const todayTotalFundsTransferred = todaysTransactions.reduce(
    (total, transaction) => {
      return total + transaction.amount;
    },
    0
  );
  return (
    <Wrapper>
      <Stat title="Funds Transferred:" score={`£ ${todayTotalFundsTransferred.toLocaleString()}`} />
    </Wrapper>
  );
}
