"use client";
import officerID from "@/app/lib/constants/officerID";
import Button from "@/app/lib/common/Button";
import {
  FormWrapper,
  ImageAndText,
  StyledImage,
  Text,
  StyledForm
} from "@/app/lib/common/formComponents/formComponents";
import { Formik, FormikValues, FormikErrors } from "formik";
import robotImage from "@/app/assets/robot-image.png";
import toast from "react-hot-toast";
import InputGroup from "@/app/lib/common/formComponents/InputGroup";

interface NewCustomerFormProps {
  first_name: string;
  last_name: string;
  email: string;
  officer_id: number;
}

const initialValues: NewCustomerFormProps = {
  first_name: "",
  last_name: "",
  email: "",
  officer_id: officerID
};

export default function NewCustomer() {
  return (
    <FormWrapper>
      <ImageAndText>
        <StyledImage
          alt="white robot with blue googles"
          src={robotImage}
          sizes="600vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Text>
          <p>Ready to add new customers? </p>
          <p>{`Just drop in their first name, last name and email address, and we're good to go!`}</p>
          <p>{`New customers are always good news.`}</p>
        </Text>
      </ImageAndText>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormikValues> = {};

          if (!values.first_name) errors.first_name = "Required";
          if (!values.last_name) errors.last_name = "Required";
          if (!values.email) errors.last_name = "Required";
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          try {
            const req = await fetch("/api/authors/new", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            });

            if (req.ok) {
              toast.success(`${values.first_name} added successfully.`);
              resetForm();
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
        {({ isSubmitting }) => (
          <StyledForm>
            <InputGroup
              label="First Name"
              name="first_name"
              autoComplete="given-name"
              required
            />

            <InputGroup
              label="Last Name"
              name="last_name"
              autoComplete="family-name"
              required
            />

            <InputGroup
              label="Email"
              name="email"
              autoComplete="email"
              required
            />

            <Button
              type="submit"
              text="Add New Author"
              onClick={() => {}}
              disabled={isSubmitting}
            ></Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
}
