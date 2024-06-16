import styled from "styled-components";
import TransactionProps from "@/app/lib/definitions/TransactionProps";
import Stat from "../Stat";

const Wrapper = styled.div``;

interface TodayStatsBodyProps {
  transactions: TransactionProps[];
}

export default function TodayStatsBody({transactions}: TodayStatsBodyProps){


  return (
    <Wrapper>

    </Wrapper>
  )
}
