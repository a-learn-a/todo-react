import React from 'react'
import Input from './components/Input'
import Select from './components/Select'
import List from './components/List'

const App = () => {
  return (
    <div className="App">
      <div className="todo-header">
        <Input />
        <Select />
      </div>
      <div className="todo-body">
        <List />
      </div>
    </div>
  )
}

export default App
