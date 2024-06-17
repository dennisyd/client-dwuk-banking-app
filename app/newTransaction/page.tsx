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
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import SelectCustomer from "./SelectCustomer";
import { useState } from "react";

interface NewTransactionFormProps {
  first_name: string;
  last_name: string;
  email: string;
}

export default function NewTransaction() {
  const initialValues: NewTransactionFormProps = {
    first_name: "",
    last_name: "",
    email: ""
  };
  const apiBaseUrl = "https://api-dwuk-banking-app-2c5a96dde0e1.herokuapp.com";
  const fetchAllCustomersUrl = apiBaseUrl + "/customers";

  const { customers } = useFetchCustomers(fetchAllCustomersUrl);
  const [fromCustomerID, setFromCustomerID] = useState(0);
  const [toCustomerID, setToCustomerID] = useState(0);
  console.log("fromCustomerID", fromCustomerID);
  console.log("toCustomerID", toCustomerID);

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
          <FormWrapper>
            <Header>New Transaction</Header>
            <FieldsWrapper>
              <SelectCustomer
                selectedCustomer={fromCustomerID}
                customers={customers}
                defaultOption="From Account"
                onChange={setFromCustomerID}
              />
              <SelectCustomer
                selectedCustomer={toCustomerID}
                customers={customers}
                defaultOption="To Account"
                onChange={setToCustomerID}
              />
              <Input id="amount" name="amount" placeholder="£ Amount" />
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
