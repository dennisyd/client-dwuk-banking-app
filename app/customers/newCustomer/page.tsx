"use client";
import Form from "./Form/Form";
import { SubmitHandler } from "react-hook-form";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";

export default function NewCustomer() {
  const onSubmit: SubmitHandler<CustomerPropsWithoutID> = (user) =>
    console.log("user has submitted", user);

  return (
    <div>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
