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
      <h1>New Customer</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const apiBaseUrl =
            "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
          // "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com/customers"
          try {
            const req = await fetch(
              "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com/customers",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify(values)
              }
            );

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
          console.log("values", values);
        }}
      >
        <Form>
          <label htmlFor="first_name">First Name</label>
          <Field id="first_name" name="first_name" placeholder="First Name" />

          <label htmlFor="last_name">Last Name</label>
          <Field id="last_name" name="last_name" placeholder="Last Name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
