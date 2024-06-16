import styled from "styled-components";
import colours from "../../constants/colors";
import dimensions from "../../constants/dimensions";
import { mobile } from "../../constants/devices";

const StatsWrapper = styled.div`
  border: 3px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
  height: auto;
  width: ${dimensions.dashboardStatWidth};
  ${mobile("width: 100%")}
`;
export default StatsWrapper;
