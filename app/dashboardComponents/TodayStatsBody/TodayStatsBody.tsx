import styled from "styled-components";
import TransactionProps from "@/app/lib/definitions/TransactionProps";
import Stat from "../Stat";
import getTodaysTransactions from "@/app/lib/utils/transactions/getTodaysTransactions";
import getTotalTransferredToday from "@/app/lib/utils/transactions/getTotalTransferredToday";
import getTopTransactionAmount from "@/app/lib/utils/transactions/getTopTransactionAmount";

const Wrapper = styled.div``;

interface TodayStatsBodyProps {
  transactions: TransactionProps[];
}

export default function TodayStatsBody({ transactions }: TodayStatsBodyProps) {
  const todaysTransactions = getTodaysTransactions(transactions);

  const todayTotalFundsTransferred = getTotalTransferredToday(transactions);

  const topTransactionAmount = getTopTransactionAmount(todaysTransactions);

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
