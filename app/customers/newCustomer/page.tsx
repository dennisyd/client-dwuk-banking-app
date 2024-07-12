"use client";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import Button from "@/app/lib/common/Button";
import colours from "@/app/lib/constants/colors";
import {
  FormWrapper,
  Header,
  FieldsWrapper,
  Input
} from "@/app/lib/common/formComponents/formComponents";

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
          const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
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
          <FormWrapper>
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
          </FormWrapper>
        </Form>
      </Formik>
    </div>
  );
}
