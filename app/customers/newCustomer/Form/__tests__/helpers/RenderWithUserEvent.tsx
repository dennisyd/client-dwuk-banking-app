import Form from "../../Form";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

const validate = jest.fn();
const submit = jest.fn();

export default class RenderWithUserEvent {
  setup() {
    this.renderForm();
    const user = this.createUserEvent();
    return user;
  }

  private createUserEvent() {
    const user = userEvent.setup();
    return user;
  }

  private renderForm() {
    render(<Form validate={validate} onSubmit={submit} />);
  }
}
