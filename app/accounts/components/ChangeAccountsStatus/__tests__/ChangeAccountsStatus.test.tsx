import { render, screen } from "@testing-library/react";
import ChangeAccountsStatus from "../ChangeAccountsStatus";

test("if it renders account statuses as buttons", () => {
  render(<ChangeAccountsStatus />);

  const activeButton = screen.getByRole('button', {name: 'ACTIVE'});
});
