import { css } from "styled-components";

const size = {
  mobile: "450px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
};

export const mobile = (inner: string) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;
export const tablet = (inner: string) => css`
  @media (max-width: ${size.tablet}) {
    ${inner};
  }
`;
export const desktop = (inner: string) => css`
  @media (max-width: ${size.desktop}) {
    ${inner};
  }
`;
export const laptop = (inner: string) => css`
  @media (max-width: ${size.laptop}) {
    ${inner};
  }
`;
