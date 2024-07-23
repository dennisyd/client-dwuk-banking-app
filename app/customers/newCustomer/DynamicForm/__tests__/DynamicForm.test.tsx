import { render, screen } from "@testing-library/react";
import DynamicForm from "../DynamicForm";
import Chance from "chance";
import userEvent from "@testing-library/user-event";

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

test.each(inputs)("3 part form", (firstName: string) => {
  render(<DynamicForm />);

});
