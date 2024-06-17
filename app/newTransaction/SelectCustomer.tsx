import styled from "styled-components";
import CustomerProps from "../lib/definitions/CustomerProps";

interface SelectCustomerProps {
  customers: CustomerProps[];
  onChange: (customerID: number) => void;
  selectedCustomer: number;
  defaultOption: string;
}

const Wrapper = styled.div``;
const Select = styled.select``;
const Option = styled.option``;
export default function SelectCustomer({
  customers,
  onChange,
  selectedCustomer,
  defaultOption
}: SelectCustomerProps) {
  return (
    <Wrapper>
      <Select
        value={selectedCustomer}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <Option>{defaultOption}</Option>
        {customers.map((customer, i) => (
          <Option
            key={i}
            value={customer.customer_id}
          >{`${customer.first_name} ${customer.last_name}`}</Option>
        ))}
      </Select>
    </Wrapper>
  );
}
