import React from 'react'
import DataEntry from './components/DataEntry'
import Select from './components/Select'
import List from './components/List'
import { StyledAppContainer } from './styles/AppContainer.styled'
import { StyledAppHeader } from './styles/AppHeader.styled'

const App: React.FC = () => {
  return (
    <StyledAppContainer>
      <StyledAppHeader>
        <DataEntry />
        <Select />
      </StyledAppHeader>
      <List />
    </StyledAppContainer>
  )
}

export default App
