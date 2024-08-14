import Button from "@/app/lib/common/Button";
import styled, { css } from "styled-components";
import colours from "@/app/lib/constants/colors";
import { useState } from "react";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePutCustomer } from "../lib/services/mutations/mutations";

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
  const { register, handleSubmit } = useForm<CustomerProps>();

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(customer.first_name);
  const [lastName, setLastName] = useState(customer.last_name);
  const [email, setEmail] = useState(customer.email);

  const putCustomerMutation = usePutCustomer();

  const handlePutCustomerSubmit: SubmitHandler<CustomerProps> = (
    puttedCustomer
  ) => {
    putCustomerMutation.mutate(puttedCustomer);
    setIsEditing(!isEditing);
  };

  if (putCustomerMutation.isPending) {
    return <span>Updating...</span>;
  }

  return isEditing ? (
    <CustomersWrapper $isEditing={isEditing}>
      <form onSubmit={handleSubmit(handlePutCustomerSubmit)}>
        <FirstName>
          <input
            {...register("first_name")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-element"
          />
        </FirstName>
        <LastName>
          <input
            {...register("last_name")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-element"
          />
        </LastName>

        <Email>
          <input
            {...register("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-element"
          />
        </Email>

        <input
          {...register("customer_id")}
          hidden
          value={customer.customer_id}
        />
        <input {...register("officer_id")} hidden defaultValue={1} />
        <Button
          type="submit"
          text={putCustomerMutation.isPending ? "Updating..." : "Save"}
          onClick={() => {}}
          secondary
          secondaryColor={colours.black}
          disabled={putCustomerMutation.isPending}
        />
      </form>
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
