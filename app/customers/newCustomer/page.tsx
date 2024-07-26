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

  function validate() {}
  function submit() {}

  return (
    <div>
      <DynamicForm validate={validate} submit={submit} />
    </div>
  );
}
