import { render, screen } from "@testing-library/react";
import UpdateAccountsStatus from "../UpdateAccountsStatus";
import userEvent from "@testing-library/user-event";

test("if it renders account statuses as buttons", async () => {
  const updateAccountStatus = jest.fn();
  render(<UpdateAccountsStatus onUpdateAccountStatus={updateAccountStatus} />);

  const activeButton = screen.getByRole("button", { name: "Activate" });
  const closeButton = screen.getByRole("button", { name: "Close" });
  const freezeButton = screen.getByRole("button", { name: "Freeze" });

  const user = userEvent.setup();

  await user.click(activeButton);
  expect(updateAccountStatus.mock.calls[0][0]).toBe("ACTIVE");

  await user.click(closeButton);
  expect(updateAccountStatus.mock.calls[1][0]).toBe("CLOSED");

  await user.click(freezeButton);
  expect(updateAccountStatus.mock.calls[2][0]).toBe("FROZEN");
});
