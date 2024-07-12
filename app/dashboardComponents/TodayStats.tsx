import useFetchTransactions from "../lib/hooks/useFetchTransactions";
import StatsWrapper from "../lib/common/dashboard/StatsWrapper";
import StatsHeader from "../lib/common/dashboard/StatsHeader";
import TodayStatsBody from "./TodayStatsBody/TodayStatsBody";

export default function TodayStats() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fetchAllTransactionsUrl = apiBaseUrl + "/transactions";

  const { transactions } = useFetchTransactions(fetchAllTransactionsUrl);
  return (
    <StatsWrapper>
      <StatsHeader title="Today's Activity" />
      <TodayStatsBody transactions={transactions} />
    </StatsWrapper>
  );
}
