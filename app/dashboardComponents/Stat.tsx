import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Title = styled.div``;
const Score = styled.div``;

interface StatProps {
  title: string;
  score: string;
}
export default function Stat({ title, score }: StatProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Score>{score}</Score>
    </Wrapper>
  );
}
