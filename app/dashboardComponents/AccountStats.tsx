import styled from "styled-components";
import useFetchAccounts from "../lib/hooks/useFetchAccounts";
import StatsHeader from "../lib/common/dashboard/StatsHeader";
import AccountStatsBody from "./AccountStatsBody/AccountStatsBody";
import colours from "../lib/constants/colors";
import dimensions from "../lib/constants/dimensions";

const Wrapper = styled.div`
  border: 3px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
  height: auto;
  width: ${dimensions.dashboardStatWidth};
`;

export default function AccountStats() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllAccountsUrl = apiBaseUrl + "/accounts";

  const { accounts, setAccounts } = useFetchAccounts(fetchAllAccountsUrl);
  return (
    <Wrapper>
      <StatsHeader title="Accounts" />
      <AccountStatsBody accounts={accounts} />
    </Wrapper>
  );
}
