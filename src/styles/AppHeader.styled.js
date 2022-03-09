import styled from 'styled-components'

export const StyledAppHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-gap: 50px;
  margin-bottom: 50px;

  @media (min-width: 768px) and (max-width: 1123px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;
}

@media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;
} 
`