"use client";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";
import toast from "react-hot-toast";
import styled from "styled-components";
import inputStyle from "@/app/lib/common/formComponents/inputStyle";
import Button from "@/app/lib/common/Button";
import colours from "@/app/lib/constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50vw;
  margin: 1rem 0;
`;

const Input = styled(Field)`
  ${inputStyle}
`;

const Header = styled.h1`
  font-size: 6vw;
`;

interface NewCustomerFormProps {
  first_name: string;
  last_name: string;
  email: string;
}

export default function NewCustomer() {
  const initialValues: NewCustomerFormProps = {
    first_name: "",
    last_name: "",
    email: ""
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const apiBaseUrl =
            "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
          try {
            const req = await fetch(apiBaseUrl + "/customers", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify(values)
            });

            if (req.ok) {
              toast.success(`${values.first_name} added successfully.`);
              actions.resetForm();
            } else {
              throw new Error();
            }
          } catch (error) {
            if (error instanceof Error) {
              toast.error("Something went wrong.");
            }
          }
        }}
      >
        <Form>
          <Wrapper>
            <Header>New Customer</Header>
            <FieldsWrapper>
              <Input
                id="first_name"
                name="first_name"
                placeholder="First Name"
              />
              <Input id="last_name" name="last_name" placeholder="Last Name" />
              <Input id="email" name="email" placeholder="Email" />
            </FieldsWrapper>
            <Button
              type="submit"
              text="Submit"
              onClick={() => {}}
              primaryColor={colours.black}
            />
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
}
