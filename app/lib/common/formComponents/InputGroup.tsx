import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { RequiredField } from "./formComponents";
import inputStyle from "./inputStyle";

const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.3em;
`;

const Input = styled(Field)`
  ${inputStyle}
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

interface InputGroupProps {
  name: string;
  label: string;
  autoComplete?: string;
  textarea?: boolean;
  required?: boolean;
  hidden?: boolean;
  value?: string;
}

export default function InputGroup({
  name = "",
  label = "",
  autoComplete = "",
  textarea = false,
  required = false,
  hidden = false,
  value = ""
}: InputGroupProps) {
  return (
    <InputAndLabel>
      <Label htmlFor={name}>
        {label}
        {required ? <RequiredField> ✳︎</RequiredField> : null}
      </Label>
      <Input
        name={name}
        autoComplete={autoComplete}
        component={textarea ? "textarea" : ""}
        required={required}
        hidden={hidden}
        value={value}
      />
      <ErrorMsg name={name} component="div" />
    </InputAndLabel>
  );
}
