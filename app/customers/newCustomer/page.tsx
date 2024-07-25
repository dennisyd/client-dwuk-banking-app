"use client";
import toast from "react-hot-toast";
import DynamicForm from "./DynamicForm/DynamicForm";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import * as yup from "yup";

export default function NewCustomer() {
  const initialValues: CustomerPropsWithoutID = {
    first_name: "",
    last_name: "",
    email: ""
  };

  const name = yup
    .string()
    .required()
    .min(3, "Must be at least 3 characters long")
    .defined("Must be defined");

  const email = yup
    .string()
    .required()
    .email("Must be a valid email")
    .defined();

  

  function submit() {}

  return (
    <div>
      <DynamicForm validate={validate} submit={submit} />
    </div>
  );
}
