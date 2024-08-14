import Button from "@/app/lib/common/Button";
import styled, { css } from "styled-components";
import colours from "@/app/lib/constants/colors";
import { Dispatch, SetStateAction, useState } from "react";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import PuttingCustomer from "../PuttingCustomer";

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
}

export default function Customer({ customer }: CustomerComponentProps) {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <PuttingCustomer
      customer={customer}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    />
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
