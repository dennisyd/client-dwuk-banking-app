"use client";
import styled from "styled-components";
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import { useState } from "react";
import Customer from "./Customer";
import colours from "../lib/constants/colors";
import dimensions from "../lib/constants/dimensions";
import { CustomerProps } from "../lib/definitions/customer/CustomerProps";
import Input from "../lib/common/formComponents/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Search = styled.div`
  margin-bottom: 0.5rem;
`;

const CustomersWrapper = styled.div`
  border: 2px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
`;

export default function Customers() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
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

  const filteredCustomers = customers.filter((customer) =>
    `${customer.first_name} ${customer.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Search>
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>
      <CustomersWrapper>
        {filteredCustomers.slice(0, 5).map((customer) => (
          <Customer
            key={customer.customer_id}
            customer={customer}
            onEditCustomer={handleEditCustomer}
          />
        ))}
      </CustomersWrapper>
    </Wrapper>
  );
}
