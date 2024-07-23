import { render, screen } from "@testing-library/react";
import DynamicForm from "../DynamicForm";
import Chance from "chance";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";

const some = new Chance();

const inputs = Array.from({ length: 6 }, () => {
  const firstName = some.first();
  const lastName = some.last();
  const email = some.email();

  const values: CustomerPropsWithoutID = {
    first_name: firstName,
    last_name: lastName,
    email: email
  };

  return values;
});

test.each(inputs)("3 part form", async (values: CustomerPropsWithoutID) => {
  render(<DynamicForm />);
});
