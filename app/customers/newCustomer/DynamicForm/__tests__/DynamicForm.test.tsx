import { render, screen } from "@testing-library/react";
import DynamicForm from "../DynamicForm";

test("3 part form", () => {
  render(<DynamicForm />);
  screen.debug();
  const header = screen.getByText("New Customer");
});
