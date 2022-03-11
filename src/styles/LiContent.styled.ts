import styled, { css } from "styled-components";

export const StyledLiContent = styled.span<{
  order?: boolean;
  isCompleted?: boolean;
}>`
  ${({ order }) =>
    order &&
    css`
      font-weight: bold;
      font-size: larger;
    `}

  ${({ isCompleted }) =>
  isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;
