import Input from "../Input";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chance from "chance";

const name = new Chance();
const someNames = Array.from(
  { length: 10 },
  () => `${name.first()} ${name.last()}`
);

test.each(someNames)("if the input value changes correctly", async (name) => {
  const placeholder = "First Name";
  const identifier = "first_name";

  render(<Input id={name} name={identifier} placeholder={placeholder} />);
  const input = screen.getByPlaceholderText(placeholder);

  const user = userEvent.setup();
  await user.type(input, name);

  expect(input).toHaveValue(name);
});
