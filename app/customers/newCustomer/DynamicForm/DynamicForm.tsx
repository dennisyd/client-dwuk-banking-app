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

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Visible = styled.div``;
const Hidden = styled.div`
  display: none;
`;

const firstName = (
  <Input id="first_name" name="first_name" placeholder="First Name" />
);
const lastName = (
  <Input id="last_name" name="last_name" placeholder="Last Name" />
);
const email = <Input id="email" name="email" placeholder="Email" />;
const submitButton = (
  <Button
    type="submit"
    text="Submit"
    onClick={() => {}}
    primaryColor={colours.black}
  />
);

const form = [firstName, lastName, email];

interface DynamicFormProps {
  validate: () => {};
  submit: () => {};
}

export default function DynamicForm({ validate, submit }: DynamicFormProps) {
  const [formSlide, setFormSlide] = useState(0);
  const [formData, setFormData] = useState();

  const forwards = () => setFormSlide(formSlide + 1);
  const backwards = () => setFormSlide(formSlide - 1);
  return (
    <FormWrapper>
      <Header>New Customer</Header>
      <FieldsWrapper>
        {form.map((input, i) =>
          i === formSlide ? (
            <Visible key={i}>{input}</Visible>
          ) : (
            <Hidden key={i}>{input}</Hidden>
          )
        )}
      </FieldsWrapper>

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
