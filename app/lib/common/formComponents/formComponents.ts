import Image from "next/image";
import { Form, Field } from "formik";
import styled from "styled-components";
import colours from "../../constants/colors";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1em;
`;

export const ImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 20em;
`;

export const StyledImage = styled(Image)`
  border-radius: 15px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  box-shadow: inset 60px 0 120px ${colours.darkRed},
    inset -60px -50px 120px ${colours.darkRed};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 20em;
`;

export const RequiredField = styled.span`
  color: red;
`;

export const Input = styled(Field)`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
`;
