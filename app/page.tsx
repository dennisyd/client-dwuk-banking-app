"use client";
import styled from "styled-components";
import AccountStats from "./dashboardComponents/AccountStats";
import BalanceStats from "./dashboardComponents/BalanceStats";
import TodayStats from "./dashboardComponents/TodayStats";

const Wrapper = styled.div`
  margin-top: 3rem;
`;
const DuoStatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <DuoStatsWrapper>
        <AccountStats />
        <BalanceStats />
      </DuoStatsWrapper>

      <DuoStatsWrapper>
        <TodayStats />
      </DuoStatsWrapper>
    </Wrapper>
  );
}
