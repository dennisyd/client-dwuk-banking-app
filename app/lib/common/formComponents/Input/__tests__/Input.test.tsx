import Input from "../Input";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chance from "chance";

const name = new Chance();
const someNames = Array.from({ length: 10 }, () => name.first());

test.each(someNames)("if the input value changes correctly", async (name) => {
  const placeholder = "First Name";
  const identifier = "first_name";

  const setState = jest.fn();
  render(
    <Input
      id={identifier}
      name={identifier}
      placeholder={placeholder}
      value={""}
      setValue={setState}
    />
  );
  const input = screen.getByPlaceholderText(placeholder);

  const user = userEvent.setup();
  await user.type(input, name);

  expect(setState).toHaveBeenCalledTimes(name.length);
});
