import React, { ReactElement, useState } from 'react'
import './App.css'
import Form from './components/Form'

const App: React.FC = (): ReactElement => {
  const [teams, setTeams] = useState([])

  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App
