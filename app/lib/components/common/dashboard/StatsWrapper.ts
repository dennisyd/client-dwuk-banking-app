import styled from "styled-components";
import colours from "@/app/lib/constants/colors";
import dimensions from "@/app/lib/constants/dimensions";
import { mobile, tablet } from "@/app/lib/constants/devices";

const StatsWrapper = styled.div`
  border: 3px solid ${colours.black};
  border-radius: ${dimensions.borderRadius};
  padding: 1rem;
  height: auto;
  width: ${dimensions.dashboardStatWidth};
  ${mobile("width: 100%;")}
  ${tablet("width: 100%;")}
`;
export default StatsWrapper;
