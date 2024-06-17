import styled from "styled-components";
import CustomerProps from "../../definitions/CustomerProps";
import inputStyle from "./inputStyle";

interface SelectCustomerProps {
  customers: CustomerProps[];
  onChange: (customerID: string) => void;
  selectedCustomer: string;
  defaultOption: string;
  name: string;
}

const Wrapper = styled.div``;
const Select = styled.select`
  ${inputStyle}
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
