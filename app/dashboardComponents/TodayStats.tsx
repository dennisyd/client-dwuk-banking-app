import useFetchTransactions from "../lib/hooks/useFetchTransactions";
import TodayStatsBody from "./TodayStatsBody/TodayStatsBody";
import StatsWrapper from "../lib/components/common/dashboard/StatsWrapper";
import StatsHeader from "../lib/components/common/dashboard/StatsHeader";

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
