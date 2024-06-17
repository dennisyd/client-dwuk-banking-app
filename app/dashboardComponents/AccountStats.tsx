import useFetchAccounts from "../lib/hooks/useFetchAccounts";
import StatsHeader from "../lib/common/dashboard/StatsHeader";
import AccountStatsBody from "./AccountStatsBody/AccountStatsBody";
import StatsWrapper from "../lib/common/dashboard/StatsWrapper";

export default function AccountStats() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllAccountsUrl = apiBaseUrl + "/accounts";

  const { accounts } = useFetchAccounts(fetchAllAccountsUrl);
  return (
    <StatsWrapper>
      <StatsHeader title="Accounts" />
      <AccountStatsBody accounts={accounts} />
    </StatsWrapper>
  );
}
