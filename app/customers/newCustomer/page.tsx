"use client";
import DynamicForm from "./DynamicForm/DynamicForm";

export default function NewCustomer() {

  function validate() {}
  function submit() {}

  return (
    <div>
      <DynamicForm validate={validate} submit={submit} />
    </div>
  );
}
