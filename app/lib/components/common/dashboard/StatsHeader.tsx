import styled from "styled-components";
import colours from "@/app/lib/constants/colors";

const Wrapper = styled.div``;
const StatsTitle = styled.div`
  border-bottom: 4px solid ${colours.black};
  font-size: 2rem;
  text-align: center;
`;

interface StatsHeaderProps {
  title: string;
}
export default function StatsHeader({ title }: StatsHeaderProps) {
  return (
    <Wrapper>
      <StatsTitle>{title}</StatsTitle>
    </Wrapper>
  );
}
