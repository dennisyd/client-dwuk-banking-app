import styled from "styled-components";
import colours from "../../constants/colors";

const Input = styled.input`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${colours.darkRed};
  padding: 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${colours.darkRed};
  }
`;
export default Input;
