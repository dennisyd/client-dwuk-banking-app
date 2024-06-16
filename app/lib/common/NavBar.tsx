"use client";
import styled from "styled-components";
import Link from "next/link";
import colours from "../utils/colors";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colours.black},
  color: ${colours.white}
`;

const LinkWrapper = styled(Link)``;

export default function NavBar() {
  return (
    <Wrapper>
      {["dashboard", "accounts", "newTransaction"].map((path, i) => (
        <LinkWrapper key={i} href={path}>
          {path}
        </LinkWrapper>
      ))}
    </Wrapper>
  );
}
