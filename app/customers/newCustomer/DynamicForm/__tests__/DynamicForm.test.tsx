import { screen } from "@testing-library/react";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import RenderWithUserEvent from "./helpers/RenderWithUserEvent";
import RandomInputs from "./helpers/RandomInputs";

const random = new RandomInputs();
const inputs = random.create();

const testing = new RenderWithUserEvent();

test.each(inputs)(
  "if the input values update correctly as the user fills the form",
  async (values: CustomerPropsWithoutID) => {
    const user = testing.setup();

    const previousButton = screen.getByRole("button", { name: "Previous" });
    const nextButton = screen.getByRole("button", { name: "Next" });

    const firstName = screen.getByPlaceholderText("First Name");
    await user.type(firstName, values.first_name);
    await user.click(nextButton);

    const lastName = screen.getByPlaceholderText("Last Name");
    await user.type(lastName, values.last_name);
    await user.click(nextButton);

    const email = screen.getByPlaceholderText("Email");
    await user.type(email, values.email);

    expect(firstName).toHaveValue(values.first_name);
    expect(lastName).toHaveValue(values.last_name);
    expect(email).toHaveValue(values.email);
  }
);
