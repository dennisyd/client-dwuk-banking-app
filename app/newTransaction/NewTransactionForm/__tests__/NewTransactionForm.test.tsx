import { render, screen } from "@testing-library/react";
import NewTransactionForm from "../NewTransactionForm";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import { CustomerProps } from "@/app/lib/definitions/customer/types/CustomerProps";

const some = new Chance();

const customers: CustomerProps[] = Array.from({ length: 10 }, () => {
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
  "if input value changes when user operates the form",
  async (customer) => {
    const user = userEvent.setup();
    const handleSubmitForm = jest.fn();

    render(
      <NewTransactionForm onSubmit={handleSubmitForm} customers={customers} />
    );

    const fromAccount = screen.getByLabelText(
      /from customer/i
    ) as HTMLSelectElement;
    await user.selectOptions(fromAccount, String(customer.customer_id));

    const toAccount = screen.getByLabelText(/to customer/i) as HTMLSelectElement;
    await user.selectOptions(toAccount, String(customer.customer_id));
  }
);
