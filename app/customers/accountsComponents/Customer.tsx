import Button from "@/app/lib/common/Button";
import styled, { css } from "styled-components";
import colours from "@/app/lib/constants/colors";
import { useState } from "react";
import CustomerProps from "@/app/lib/definitions/CustomerProps";

const Wrapper = styled.div<{ $isEditing?: boolean }>`
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

// background-color: ${colors.gray};
const Input = styled.input`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${colours.darkRed};
  padding: 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${colours.darkRed};
  }
`;

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
    <Wrapper $isEditing={isEditing}>
      <FirstName>
        <Input
          name="first_name"
          value={customer.first_name}
          onChange={(e) =>
            onEditCustomer({ ...customer, first_name: e.target.value })
          }
        />
      </FirstName>
      <LastName>
        <Input
          name="last_name"
          value={customer.last_name}
          onChange={(e) =>
            onEditCustomer({ ...customer, last_name: e.target.value })
          }
        />
      </LastName>

      <Email>
        <Input
          name="email"
          value={customer.email}
          onChange={(e) =>
            onEditCustomer({ ...customer, email: e.target.value })
          }
        />
      </Email>
      <Button
        type="button"
        text="Save"
        onClick={() => setIsEditing(!isEditing)}
        secondary
        secondaryColor={colours.black}
      />
    </Wrapper>
  ) : (
    <Wrapper>
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
    </Wrapper>
  );
}
