import styled from "styled-components";
import AccountProps from "@/app/lib/definitions/AuthorProps";
import FrozenAccounts from "./FrozenAccounts/FrozenAccounts";

const Wrapper = styled.div``;

interface AccountStatsBodyProps {
  accounts: AccountProps[];
}
export default function AccountStatsBody({ accounts }: AccountStatsBodyProps) {
  const activeAccounts = accounts
    .filter((account) => account.status === "ACTIVE")
    .length.toString();

  const frozenAccounts = accounts
    .filter((account) => account.status === "FROZEN")
    .length.toString();

  const closedAccounts = accounts
    .filter((account) => account.status === "CLOSED")
    .length.toString();
  return (
    <Wrapper>
      <FrozenAccounts frozenAccounts={frozenAccounts} />
    </Wrapper>
  );
}
