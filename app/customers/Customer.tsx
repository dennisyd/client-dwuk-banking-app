import Button from "@/app/lib/common/Button";
import styled, { css } from "styled-components";
import colours from "@/app/lib/constants/colors";
import { useState } from "react";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import Input from "../lib/common/formComponents/Input/Input";

const CustomersWrapper = styled.div<{ $isEditing?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid ${colours.black};
  padding: 0.5rem;
  gap: 1.5rem;
  ${(props) =>
    props.$isEditing &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;
const FirstAndLastName = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;
const FirstName = styled.div``;
const LastName = styled.div``;
const Email = styled.div``;
const ContactDetails = styled.div``;
const EditButton = styled.div``;

const Wrapper = styled.div``;

interface CustomerComponentProps {
  customer: CustomerProps;
  onEditCustomer: (editedAuthor: CustomerProps) => void;
}
export default function Customer({
  customer,
  onEditCustomer
}: CustomerComponentProps) {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <CustomersWrapper $isEditing={isEditing}>
      <FirstName>
        <input value={customer.first_name} onChange={() => }/>
        <Input id="first_name" name="first_name" placeholder="First Name" />
      </FirstName>
      <LastName>
        <Input id="last_name" name="last_name" placeholder="Last Name" />
      </LastName>

      <Email>
        <Input id="email" name="email" placeholder="Email" />
      </Email>
      <Button
        type="button"
        text="Save"
        onClick={() => setIsEditing(!isEditing)}
        secondary
        secondaryColor={colours.black}
      />
    </CustomersWrapper>
  ) : (
    <Wrapper>
      <CustomersWrapper>
        <ContactDetails>
          <FirstAndLastName>
            <FirstName>{customer.first_name}</FirstName>
            <LastName>{customer.last_name}</LastName>
          </FirstAndLastName>
          <Email>{customer.email}</Email>
        </ContactDetails>
        <EditButton>
          <Button
            type="button"
            text="Edit"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
            primaryColor={colours.black}
          />
        </EditButton>
      </CustomersWrapper>
    </Wrapper>
  );
}
