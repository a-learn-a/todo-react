import styled from 'styled-components'

export const StyledListContainer = styled.div`
padding-bottom: 50px;

li {
  display: grid;
  grid-template-columns: 1fr 15fr 1fr;
  gap: 10px;
  margin-bottom: 30px;
  padding-left: 15px;
}

p {
  text-align: center;
}

span {
  display: flex;
  align-items: center;
}
`