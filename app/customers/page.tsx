"use client";
import styled from "styled-components";
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import { useState } from "react";
import Customer from "./accountsComponents/Customer";
import colours from "../lib/constants/colors";
import dimensions from "../lib/constants/dimensions";
import CustomerProps from "../lib/definitions/CustomerProps";
import Input from "../lib/common/customers/Input";
import Button from "../lib/common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CustomersWrapper = styled.div`
  border: 2px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
`;

export default function Customers() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllCustomersUrl = apiBaseUrl + "/customers";
  const { customers, setCustomers } = useFetchCustomers(fetchAllCustomersUrl);
  const [searchTerm, setSearchTerm] = useState("");

  function handleEditCustomer(editedCustomer: CustomerProps) {
    const editedCustomers = customers.map((customer) => {
      if (editedCustomer.customer_id === customer.customer_id) {
        return editedCustomer;
      } else {
        return customer;
      }
    });
    setCustomers(editedCustomers);
  }

  function handleSearchCustomer(searchTerm: string) {
    if (searchTerm === "") {
      setCustomers(customers);
    }
    const matchingCustomers = customers.filter(
      (customer) => customer.first_name === searchTerm
    );
    setCustomers(matchingCustomers);
  }

  return (
    <Wrapper>
      <Search>
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          type="button"
          primary
          primaryColor={colours.gray}
          text="Find"
          onClick={() => handleSearchCustomer(searchTerm)}
        />
      </Search>
      <CustomersWrapper>
        {customers.slice(0, 5).map((customer) => (
          <Customer
            key={customer.customer_id}
            customer={customer}
            onEditCustomer={handleEditCustomer}
            onSearchCustomer={handleSearchCustomer}
          />
        ))}
      </CustomersWrapper>
    </Wrapper>
  );
}
