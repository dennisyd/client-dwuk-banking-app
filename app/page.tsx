"use client";
import styled from "styled-components";
import AccountStats from "./dashboardComponents/AccountStats";

const Wrapper = styled.div`
  border: 3px solid green;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <AccountStats />
    </Wrapper>
  );
}
