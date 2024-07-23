import { render, screen } from "@testing-library/react";
import DynamicForm from "../DynamicForm";
import Chance from "chance";
import userEvent from "@testing-library/user-event";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/CustomerProps";

const some = new Chance();

const inputs = Array.from({ length: 6 }, () => {
  const firstName = some.first();
  const lastName = some.last();
  const email = some.email();

  return [
    firstName,
    lastName,
    email,
    { firstName: firstName, lastName: lastName, email: email }
  ];
});

test.each(inputs)(
  "3 part form",
  (
    firstName: string,
    lastName: string,
    email: string,
    customer: CustomerPropsWithoutID
  ) => {
    render(<DynamicForm />);
  }
);
