"use client";
import styled from "styled-components";
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import Customer from "./accountsComponents/Customer";
import colours from "../lib/constants/colors";
import dimensions from "../lib/constants/dimensions";
import CustomerProps from "../lib/definitions/CustomerProps";

const Wrapper = styled.div`
  border: 2px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
`;

export default function Customers() {
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllCustomersUrl = apiBaseUrl + "/customers";
  const { customers, setCustomers } = useFetchCustomers(fetchAllCustomersUrl);

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

  return (
    <Wrapper>
      {customers.slice(0, 5).map((customer) => (
        <Customer
          key={customer.customer_id}
          customer={customer}
          onEditCustomer={handleEditCustomer}
        />
      ))}
    </Wrapper>
  );
}
