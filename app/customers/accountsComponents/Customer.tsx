import Button from "@/app/lib/common/Button";
import styled from "styled-components";
import colours from "@/app/lib/constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid ${colours.black};
  padding: 0.5rem;
  gap: 1.5rem;
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

interface CustomerProps {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Customer({
  firstName,
  lastName,
  email
}: CustomerProps) {
  return (
    <Wrapper>
      <ContactDetails>
        <FirstAndLastName>
          <FirstName>{firstName}</FirstName>
          <LastName>{lastName}</LastName>
        </FirstAndLastName>
        <Email>{email}</Email>
      </ContactDetails>
      <EditButton>
        <Button
          type="button"
          text="Edit"
          onClick={() => {}}
          primaryColor={colours.black}
        />
      </EditButton>
    </Wrapper>
  );
}
