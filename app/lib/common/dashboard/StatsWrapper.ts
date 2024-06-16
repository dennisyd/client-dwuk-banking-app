import styled from "styled-components";
import colours from "../../constants/colors";
import dimensions from "../../constants/dimensions";

const StatsWrapper = styled.div`
  border: 3px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
  height: auto;
  width: ${dimensions.dashboardStatWidth};
`;
export default StatsWrapper;
