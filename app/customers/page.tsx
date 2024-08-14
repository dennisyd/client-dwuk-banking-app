"use client";
import styled from "styled-components";
import { useState } from "react";
import Customer from "./Customer";
import colours from "../lib/constants/colors";
import dimensions from "../lib/constants/dimensions";
import Input from "../lib/common/formComponents/Input/Input";
import { useCustomers } from "../lib/services/queries/queries";

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
  const [searchTerm, setSearchTerm] = useState("");
  const customers = useCustomers();

  // function handleEditCustomer(editedCustomer: CustomerProps) {
  //   const editedCustomers = customers.map((customer) => {
  //     if (editedCustomer.customer_id === customer.customer_id) {
  //       return editedCustomer;
  //     } else {
  //       return customer;
  //     }
  //   });
  //   setCustomers(editedCustomers);
  // }
  function handleEditCustomer() {}

  if (customers.isPending) {
    return <span>Loading ...</span>;
  }

  if (customers.isError) {
    return <span>{`An error occurred: ${customers.error}`}</span>;
  }

  const filteredCustomers = customers.data.filter((customer) =>
    `${customer.first_name} ${customer.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Search>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-element"
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
