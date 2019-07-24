import React, { ReactElement, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TeamCard from './components/TeamCard'
export interface TeamMember {
  name: string
  email: string
  role: string
}

const App: React.FC = (): ReactElement => {
  const [teams, setTeams] = useState<Record<string, TeamMember[]>>({})
  const [memberToEdit, setMemberToEdit] = useState<TeamMember | undefined>(
    undefined
  )

  const addToTeam = (teamName: string, teamMember: TeamMember): void => {
    const existingTeam = teams[teamName]

    if (existingTeam) {
      setTeams({ ...teams, [teamName]: [...existingTeam, teamMember] })
    } else {
      setTeams({ ...teams, [teamName]: [teamMember] })
    }
  }

  return (
    <div className="App">
      <Form addToTeam={addToTeam} />
      {Object.keys(teams).map(
        (teamName: string): ReactElement => (
          <TeamCard
            key={teamName}
            name={teamName}
            members={teams[teamName]}
            setMemberToEdit={setMemberToEdit}
          />
        )
      )}
    </div>
  )
}

export default App
