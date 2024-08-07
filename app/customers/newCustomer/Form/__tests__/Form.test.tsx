import { screen, render } from "@testing-library/react";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import RenderWithUserEvent from "./helpers/RenderWithUserEvent";
import RandomInputs from "./helpers/RandomInputs";
import userEvent from "@testing-library/user-event";
import Form from "../Form";

const random = new RandomInputs();
const inputs = random.create();

const testing = new RenderWithUserEvent();

test.each(inputs)(
  "if the input values update correctly as the user fills the form",
  async (values: CustomerPropsWithoutID) => {
    const user = testing.setup();

    const firstName = screen.getByPlaceholderText("First Name");
    await user.type(firstName, values.first_name);

    const lastName = screen.getByPlaceholderText("Last Name");
    await user.type(lastName, values.last_name);

    const email = screen.getByPlaceholderText("Email");
    await user.type(email, values.email);

    expect(firstName).toHaveValue(values.first_name);
    expect(lastName).toHaveValue(values.last_name);
    expect(email).toHaveValue(values.email);
  }
);

test.each(inputs)(
  "if the submit function is called with correct arguments",
  async (values) => {
    const validate = jest.fn();
    const submit = jest.fn();
    render(<Form validate={validate} onSubmit={submit} />);
    const user = userEvent.setup();

    const firstName = screen.getByPlaceholderText("First Name");
    await user.type(firstName, values.first_name);

    const lastName = screen.getByPlaceholderText("Last Name");
    await user.type(lastName, values.last_name);

    const email = screen.getByPlaceholderText("Email");
    await user.type(email, values.email);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);

    expect(submit.mock.calls).toHaveLength(1);
    expect(submit.mock.calls[0][0]).toStrictEqual({
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email
    });
  }
);
