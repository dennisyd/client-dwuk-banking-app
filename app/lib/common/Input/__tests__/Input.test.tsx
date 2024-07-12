import Input from "../Input";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chance from "chance";

const some = new Chance();
const someValues = Array.from(
  { length: 10 },
  () => `${some.first()} ${some.last()}`
);

test.each(someValues)("if the input value changes correctly", async (value) => {
  const placeholder = "First Name";
  render(<Input name="first_name" placeholder={placeholder} />);
  const input = screen.getByPlaceholderText(placeholder);

  const user = userEvent.setup();
  await user.type(input, value);

  expect(input).toHaveValue(value);
});
