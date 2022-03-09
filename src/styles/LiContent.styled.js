import styled, {css} from 'styled-components'

export const StyledLiContent = styled.span`
  ${({order}) => order && css`
  font-weight: bold;
  font-size: larger;
  `
}

${({text}) => text && css`
text-decoration: line-through;
  `
}
`