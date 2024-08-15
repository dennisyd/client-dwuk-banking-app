import useFetchAccounts from "../lib/hooks/useFetchAccounts";
import AccountStatsBody from "./AccountStatsBody/AccountStatsBody";
import StatsWrapper from "../lib/components/common/dashboard/StatsWrapper";
import StatsHeader from "../lib/components/common/dashboard/StatsHeader";

export default function AccountStats() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fetchAllAccountsUrl = apiBaseUrl + "/accounts";

  const { accounts } = useFetchAccounts(fetchAllAccountsUrl);
  return (
    <StatsWrapper>
      <StatsHeader title="Accounts" />
      <AccountStatsBody accounts={accounts} />
    </StatsWrapper>
  );
}
