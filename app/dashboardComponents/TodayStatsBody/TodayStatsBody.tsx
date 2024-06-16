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

  const topTransactionAmount = todaysTransactions.reduce(
    (amount, transaction) => {
      if (transaction.amount > amount) return transaction.amount;
      else return amount;
    },
    0
  );
  return (
    <Wrapper>
      <Stat
        title="Top Transaction:"
        score={`£ ${topTransactionAmount.toLocaleString()}`}
      />
      <Stat
        title="Total Transferred:"
        score={`£ ${todayTotalFundsTransferred.toLocaleString()}`}
      />
      <Stat
        title="Total Transactions:"
        score={`${todaysTransactions.length.toLocaleString()}`}
      />
    </Wrapper>
  );
}
