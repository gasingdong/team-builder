import React, { ReactElement, useState } from 'react'
import './App.css'
import Form from './components/Form'
export interface TeamMember {
  name: string
  email: string
  role: string
}

interface Teams {
  [index: string]: TeamMember[]
}

const App: React.FC = (): ReactElement => {
  const [teams, setTeams] = useState<Teams>({})

  const addToTeam = (teamName: string, teamMember: TeamMember): void => {
    setTeams({ ...teams, [teamName]: [...teams.teamName, teamMember] })
  }

  return (
    <div className="App">
      <Form addToTeam={addToTeam} />
    </div>
  )
}

export default App
