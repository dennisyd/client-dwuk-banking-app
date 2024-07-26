import DynamicForm from "../../DynamicForm";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

const validate = jest.fn;
const submit = jest.fn;

export default class RenderWithUserEvent {
  setup() {
    this.renderDynamicForm();
    const user = this.createUserEvent();
    return user;
  }

  private createUserEvent() {
    const user = userEvent.setup();
    return user;
  }

  private renderDynamicForm() {
    render(<DynamicForm validate={validate} submit={submit} />);
  }
}
