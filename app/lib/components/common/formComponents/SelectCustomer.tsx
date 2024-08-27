import styled from "styled-components";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";

interface SelectCustomerProps {
  customers: CustomerProps[];
  onChange: (customerID: string) => void;
  selectedCustomer: string;
  defaultOption: string;
  name: string;
}

const Wrapper = styled.div``;
const Select = styled.select`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid rgb(142, 0, 0);
  padding: 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px solid rgb(212, 0, 0);
  }
`;
const Option = styled.option``;
export default function SelectCustomer({
  customers,
  onChange,
  selectedCustomer,
  defaultOption,
  name
}: SelectCustomerProps) {
  return (
    <Wrapper>
      <Select
        name={name}
        value={selectedCustomer}
        onChange={(e) => onChange(e.target.value)}
      >
        <Option disabled>{defaultOption} </Option>
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
