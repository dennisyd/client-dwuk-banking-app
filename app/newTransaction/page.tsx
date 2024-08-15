"use client";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import Button from "../lib/components/common/Button";
import colours from "@/app/lib/constants/colors";
import {
  FormWrapper,
  Header,
  FieldsWrapper
} from "../lib/components/common/formComponents/formComponents";
import useFetchCustomers from "../lib/hooks/useFetchCustomers";
import SelectCustomer from "../lib/components/common/formComponents/SelectCustomer";
import React, { useState } from "react";
import AccountProps from "../lib/definitions/AuthorProps";

interface NewTransactionFormProps {
  from_customer: string;
  to_customer: string;
  amount: string;
}

export default function NewTransaction() {
  const initialValues: NewTransactionFormProps = {
    from_customer: "",
    to_customer: "",
    amount: ""
  };
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fetchAllCustomersUrl = apiBaseUrl + "/customers";

  const { customers } = useFetchCustomers(fetchAllCustomersUrl);
  const [fromCustomerID, setFromCustomerID] = useState("");
  const [toCustomerID, setToCustomerID] = useState("");
  const [transactionValue, setTransactionValue] = useState("");

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      from_customer: { value: string };
      to_customer: { value: string };
      amount: { value: string };
    };
    const fromCustomerID = target.from_customer.value;
    const toCustomerID = target.to_customer.value;
    const amount = target.amount.value;

    const fromCustomerUrl = `${process.env.NEXT_PUBLIC_API_URL}/accounts/${fromCustomerID}`;
    const toCustomerUrl = `${process.env.NEXT_PUBLIC_API_URL}/accounts/${toCustomerID}`;

    try {
      const [fromCustomerResponse, toCustomerResponse] = await Promise.all([
        fetch(fromCustomerUrl),
        fetch(toCustomerUrl)
      ]);

      const fromCustomerString = await fromCustomerResponse.json();
      const toCustomerString = await toCustomerResponse.json();

      const [fromCustomer] = (await JSON.parse(
        fromCustomerString
      )) as AccountProps[];
      const [toCustomer] = (await JSON.parse(
        toCustomerString
      )) as AccountProps[];

      const fromCustomerID = fromCustomer.customer_id;
      const toCustomerID = toCustomer.customer_id;
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Something went wrong.");
      }
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          toast.success("Transaction Added.");
        }}
      >
        <Form>
          <FormWrapper>
            <Header>New Transaction</Header>
            <FieldsWrapper>
              <SelectCustomer
                name={"from_customer"}
                selectedCustomer={fromCustomerID}
                customers={customers}
                defaultOption="From Account"
                onChange={setFromCustomerID}
              />
              <SelectCustomer
                name="to_customer"
                selectedCustomer={toCustomerID}
                customers={customers}
                defaultOption="To Account"
                onChange={setToCustomerID}
              />
              <input
                className="input-element"
                type="number"
                value={transactionValue}
                name="amount"
                placeholder="£ Amount"
                onChange={(e) => setTransactionValue(e.target.value)}
              />
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
