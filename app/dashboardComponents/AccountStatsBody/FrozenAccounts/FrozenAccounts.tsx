import styled from "styled-components";
import Stat from "../../Stat";

const Wrapper = styled.div``;

interface AccountStatsBodyProps {
  frozenAccounts: string;
}

export default function FrozenAccounts({
  frozenAccounts
}: AccountStatsBodyProps) {
  return (
    <Wrapper>
      <Stat title="Frozen" score={frozenAccounts} />
    </Wrapper>
  );
}
