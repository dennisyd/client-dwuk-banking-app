"use client";
import styled from "styled-components";
import AccountStats from "./dashboardComponents/AccountStats";

const Wrapper = styled.div``;
export default function Dashboard() {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <AccountStats />
    </Wrapper>
  );
}
