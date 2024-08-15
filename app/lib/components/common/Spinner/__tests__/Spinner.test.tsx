import { render } from "@testing-library/react";
import Spinner from "../Spinner";


test('if the loading spinner is displayed on the page', () => {
  render(<Spinner/>);
})