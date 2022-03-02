import React from 'react'
import DataEntry from './components/DataEntry'
import Select from './components/Select'
import List from './components/List'

const App = () => {
  return (
    <div className="App">
      <div className="todo-header">
        <DataEntry />
        <Select />
      </div>
      <div className="todo-body">
        <List />
      </div>
    </div>
  )
}

export default App
