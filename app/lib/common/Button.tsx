import styled, { css } from "styled-components";

const StyledButton = styled.button<{
  $disabled: boolean;
  $primary: boolean;
  $secondary?: boolean;
  $warning?: boolean;
  $danger?: boolean;
  $plain?: boolean;
  $primaryColor?: string;
  $secondaryColor?: string;
  $warningColor?: string;
  $dangerColor?: string;
}>`
  border-radius: 15px;
  padding: 0.6em 1em;
  border: none;
  &:hover {
    box-shadow: 0 0 0.5rem ${(props) => props.$primaryColor};
  }
  ${(props) =>
    props.$primary &&
    css`
      background: ${props.$primaryColor};
      color: white;
    `}

  ${(props) =>
    props.$secondary &&
    css`
      background: white;
      border: 2px solid ${props.$secondaryColor};
    `}

    ${(props) =>
    props.$warning &&
    css`
      background: ${props.$warningColor};
    `}

    ${(props) =>
    props.$danger &&
    css`
      background: ${props.$dangerColor};
    `}
    ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

    ${(props) =>
    props.$plain &&
    css`
      background: white;
      color: black;
    `}
`;

interface ButtonProps {
  type: "button" | "submit";
  text: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  danger?: boolean;
  plain?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  warningColor?: string;
  dangerColor?: string;
}

export default function Button({
  type = "button",
  text = "Button",
  onClick = () => {},
  disabled = false,
  primary = true,
  secondary = false,
  warning = false,
  danger = false,
  plain = false,
  primaryColor = "#0d99ff",
  secondaryColor = "#4db8ff",
  warningColor = "#ffa500",
  dangerColor = "#ff0000"
}: ButtonProps) {
  if (secondary || warning || danger) primary = false;

  if (secondary) {
    warning = false;
    danger = false;
    plain = false;
  }

  if (warning) {
    secondary = false;
    danger = false;
  }

  if (danger) {
    secondary = false;
    warning = false;
  }

  return (
    <StyledButton
      aria-disabled={disabled}
      type={type}
      onClick={disabled ? () => {} : onClick}
      $disabled={disabled}
      $primary={primary}
      $secondary={secondary}
      $warning={warning}
      $danger={danger}
      $plain={plain}
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
      $warningColor={warningColor}
      $dangerColor={dangerColor}
    >
      {text}
    </StyledButton>
  );
}
