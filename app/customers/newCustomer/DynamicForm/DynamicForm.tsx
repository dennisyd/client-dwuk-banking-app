import {
  FormWrapper,
  Header,
  FieldsWrapper
} from "@/app/lib/common/formComponents/formComponents";
import Input from "@/app/lib/common/formComponents/Input/Input";
import Button from "@/app/lib/common/Button";
import colours from "@/app/lib/constants/colors";
import { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Visible = styled.div``;
const Hidden = styled.div`
  display: none;
`;

const nameSchema = yup
  .string()
  .required()
  .min(3, "Must be at least 3 characters long")
  .defined("Must be defined");

const emailSchema = yup
  .string()
  .required()
  .email("Must be a valid email")
  .defined();

interface DynamicFormProps {
  validate: (schema: yup.Schema, value: any) => void;
  submit: () => void;
}

export default function DynamicForm({ validate, submit }: DynamicFormProps) {
  const [formSlide, setFormSlide] = useState(0);
  const [formData, setFormData] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const firstNameElement = (
    <Input
      id="first_name"
      name="first_name"
      placeholder="First Name"
      value={firstName}
      setValue={setFirstName}
    />
  );
  const lastNameElement = (
    <Input
      id="last_name"
      name="last_name"
      placeholder="Last Name"
      value={lastName}
      setValue={setLastName}
    />
  );
  const emailElement = (
    <Input
      id="email"
      name="email"
      placeholder="Email"
      value={email}
      setValue={setEmail}
    />
  );
  const submitButton = (
    <Button
      type="submit"
      text="Submit"
      onClick={() => {}}
      primaryColor={colours.black}
    />
  );

  const form = [firstNameElement, lastNameElement, emailElement];

  const forwards = () => {
    setFormSlide(formSlide + 1);
  };
  const backwards = () => setFormSlide(formSlide - 1);
  return (
    <FormWrapper>
      <Header>New Customer</Header>
      <FieldsWrapper>{form[formSlide]}</FieldsWrapper>

      <ButtonsWrapper>
        <Button type="button" text="Previous" secondary onClick={backwards} />
        <Button type="button" text="Next" onClick={forwards} />
      </ButtonsWrapper>

      <Button
        type="submit"
        text="Submit"
        onClick={() => {}}
        primaryColor={colours.black}
      />
    </FormWrapper>
  );
}
