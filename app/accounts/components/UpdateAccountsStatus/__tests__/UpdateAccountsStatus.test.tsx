import { render, screen } from "@testing-library/react";
import UpdateAccountsStatus from "../UpdateAccountsStatus";

test("if it renders account statuses as buttons", () => {
  render(<UpdateAccountsStatus />);

  const activeButton = screen.getByRole("button", { name: "Activate" });
  const closeButton = screen.getByRole("button", { name: "Close" });
  const freezeButton = screen.getByRole("button", { name: "Freeze" });
});
