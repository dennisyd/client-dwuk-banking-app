"use client";
import styled from "styled-components";
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import Customer from "./accountsComponents/Customer";
import colours from "../lib/constants/colors";
import dimensions from "../lib/constants/dimensions";

const Wrapper = styled.div`
  border: 2px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
`;

export default function Accounts() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllCustomersUrl = apiBaseUrl + "/customers";
  const { customers, setCustomers } = useFetchCustomers(fetchAllCustomersUrl);

  return (
    <Wrapper>
      {customers.slice(0, 5).map((customer) => (
        <Customer
          key={customer.customer_id}
          firstName={customer.first_name}
          lastName={customer.last_name}
          email={customer.email}
        />
      ))}
    </Wrapper>
  );
}
