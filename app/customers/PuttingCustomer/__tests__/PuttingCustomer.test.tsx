import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import PuttingCustomer from "../PuttingCustomer";
import { render, screen } from "@testing-library/react";
import ReactQueryProvider from "@/app/ReactQueryProvider";
import userEvent from "@testing-library/user-event";
import Chance from "chance";

const some = new Chance();

const customersTests = Array.from({ length: 10 }, () => {
  const inputCustomer: CustomerProps = {
    customer_id: some.integer({ min: 1, max: 32000 }),
    officer_id: 1,
    first_name: some.first(),
    last_name: some.last(),
    email: some.email()
  };

  const expectedCustomer: CustomerProps = {
    customer_id: some.integer({ min: 1, max: 32000 }),
    officer_id: 1,
    first_name: some.first(),
    last_name: some.last(),
    email: some.email()
  };

  return [inputCustomer, expectedCustomer];
});

test.each(customersTests)(
  "if it changes the input value correctly",
  async (customer, puttedCustomer) => {
    const isEditing = true;
    const setIsEditing = jest.fn();

    render(
      <ReactQueryProvider>
        <PuttingCustomer
          customer={customer}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </ReactQueryProvider>
    );

    const firstName = screen.getByDisplayValue(
      customer.first_name
    ) as HTMLInputElement;
    const lastName = screen.getByDisplayValue(
      customer.last_name
    ) as HTMLInputElement;
    const email = screen.getByDisplayValue(customer.email) as HTMLInputElement;

    const user = userEvent.setup();

    await user.clear(firstName);
    await user.clear(lastName);
    await user.clear(email);

    await user.type(firstName, puttedCustomer.first_name);
    await user.type(lastName, puttedCustomer.last_name);
    await user.type(email, puttedCustomer.email);

    expect(firstName).toHaveValue(puttedCustomer.first_name);
    expect(lastName).toHaveValue(puttedCustomer.last_name);
    expect(email).toHaveValue(puttedCustomer.email);
  }
);
