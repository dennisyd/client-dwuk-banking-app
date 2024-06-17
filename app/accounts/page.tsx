"use client";
import styled from "styled-components";
import Button from "../lib/common/Button";
import useFetchAccounts from "../lib/hooks/useFetchAccounts";
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import useCustomersAndAccounts from "../lib/hooks/useCustomersAndAccounts";

const Wrapper = styled.div``;

export default function Accounts() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllCustomersUrl = apiBaseUrl + "/customers";
  const { customers, setCustomers } = useFetchCustomers(fetchAllCustomersUrl);

  return (
    <Wrapper>
      <h1>Accounts Page</h1>
    </Wrapper>
  );
}
