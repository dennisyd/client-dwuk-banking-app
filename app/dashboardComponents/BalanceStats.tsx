import useFetchAccounts from "../lib/hooks/useFetchAccounts";
import StatsHeader from "../lib/common/dashboard/StatsHeader";
import StatsWrapper from "../lib/common/dashboard/StatsWrapper";
import BalanceStatsBody from "./BalanceStatsBody/BalanceStatsBody";

export default function BalanceStats() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fetchAllAccountsUrl = apiBaseUrl + "/accounts";

  const { accounts, setAccounts } = useFetchAccounts(fetchAllAccountsUrl);
  return (
    <StatsWrapper>
      <StatsHeader title="Balances" />
      <BalanceStatsBody accounts={accounts} />
    </StatsWrapper>
  );
}
