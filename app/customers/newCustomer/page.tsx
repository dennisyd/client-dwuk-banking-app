"use client";
import Form from "./Form/Form";
import FormValidator from "./Form/FormValidator/FormValidator";
import { SubmitHandler } from "react-hook-form";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";

export default function NewCustomer() {
  const formValidator = new FormValidator();
  const onSubmit: SubmitHandler<CustomerPropsWithoutID> = (user) =>
    console.log("user has submitted", user);

  return (
    <div>
      <Form validate={formValidator.validate} onSubmit={onSubmit} />
    </div>
  );
}
