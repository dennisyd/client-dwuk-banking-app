"use client";
import styled from "styled-components";
import AccountStats from "./dashboardComponents/AccountStats";
import BalanceStats from "./dashboardComponents/BalanceStats";

const Wrapper = styled.div`
  border: 3px solid green;
`;
const DuoStatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <DuoStatsWrapper>
        <AccountStats />
        <BalanceStats />
      </DuoStatsWrapper>
    </Wrapper>
  );
}
