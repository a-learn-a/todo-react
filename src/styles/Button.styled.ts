import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  primary?: boolean;
  danger?: boolean;
  border?: string;
}>`
  top: 0;
  right: 0;
  padding: 13px 50px 13px;
  outline: 0;
  background-color: rgba(0, 0, 0, 0);

  &::after {
    content: "";
    background-color: ${(props) => (props.primary ? "#ffe54c" : "darksalmon")};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover::after {
    top: 0px;
    left: 0px;
  }

  ${({ primary }) =>
    primary &&
    css`
      position: absolute;
      border: 1px solid black;
    `}

  ${({ danger, border }) =>
    danger &&
    css`
      position: relative;
      border: none;
      ${border}: 1px solid black;
    `}
`;
