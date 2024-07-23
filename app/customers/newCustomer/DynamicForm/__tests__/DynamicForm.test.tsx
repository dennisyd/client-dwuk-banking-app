import { screen } from "@testing-library/react";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import RenderWithUserEvent from "./helpers/RenderWithUserEvent";
import RandomInputs from "./helpers/RandomInputs";

const random = new RandomInputs();
const inputs = random.create();

const testing = new RenderWithUserEvent();

test.each(inputs)("3 part form", async (values: CustomerPropsWithoutID) => {
  testing.setup();

  const firstName = screen.getByPlaceholderText("First Name");
  const lastName = screen.getByPlaceholderText("Last Name");
  const email = screen.getByPlaceholderText("Email");
});
