import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";
import Customer from "../Customer";
import { render, screen } from "@testing-library/react";
import Chance from "chance";

const some = new Chance();

const customers = Array.from({ length: 10 }, () => {
  const customer: CustomerProps = {
    customer_id: some.integer({ min: 1, max: 32000 }),
    officer_id: 1,
    first_name: some.first(),
    last_name: some.last(),
    email: some.email()
  };
  return customer;
});

test.each(customers)(
  "if it renders with correct customer details",
  (customer) => {
    render(<Customer customer={customer} />);

    const firstName = screen.getByText(customer.first_name) as HTMLDivElement;
    const lastName = screen.getByText(customer.last_name) as HTMLDivElement;
    const email = screen.getByText(customer.email) as HTMLDivElement;

    expect(firstName.innerHTML).toBe(customer.first_name);
    expect(lastName.innerHTML).toBe(customer.last_name);
    expect(email.innerHTML).toBe(customer.email);
  }
);
