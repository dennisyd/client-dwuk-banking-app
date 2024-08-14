import styled from "styled-components";
import colours from "@/app/lib/constants/colors";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50vw;
  min-height: 8vh;
  margin: 1rem 0;
`;

export const Header = styled.h1`
  font-size: 6vw;
`;

export const InputField = styled.input`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${colours.darkRed};
  padding: 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${colours.darkRed};
  }
`;
