import styled from "styled-components";
import inputStyle from "./inputStyle";
import Input from "../Input/Input";

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
  margin: 1rem 0;
`;

export const InputField = styled(Input)`
  ${inputStyle}
`;

export const Header = styled.h1`
  font-size: 6vw;
`;
