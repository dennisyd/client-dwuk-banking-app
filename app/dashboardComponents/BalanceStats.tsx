import useFetchAccounts from "../lib/hooks/useFetchAccounts";
import BalanceStatsBody from "./BalanceStatsBody/BalanceStatsBody";
import StatsWrapper from "../lib/components/common/dashboard/StatsWrapper";
import StatsHeader from "../lib/components/common/dashboard/StatsHeader";

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
