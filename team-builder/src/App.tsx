import React, { ReactElement, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TeamCard from './components/TeamCard'
export interface TeamMember {
  id: number
  name: string
  email: string
  role: string
}

const App: React.FC = (): ReactElement => {
  const [teams, setTeams] = useState<Record<string, TeamMember[]>>({})
  const [id, setId] = useState<number>(0)
  const [memberToEdit, setMemberToEdit] = useState<TeamMember | undefined>(
    undefined
  )
  const [teamToEdit, setTeamToEdit] = useState<string>('')

  const editMember = (teamName: string, teamMember: TeamMember): void => {
    setTeams({
      ...teams,
      [teamName]: teams[teamName].map(
        (member: TeamMember): TeamMember => {
          if (teamMember.id === member.id) {
            return {
              ...member,
              name: teamMember.name,
              email: teamMember.email,
              role: teamMember.role,
            }
          }
          return member
        }
      ),
    })

    setMemberToEdit(undefined)
  }

  const addMember = (teamName: string, teamMember: TeamMember): void => {
    const existingTeam = teams[teamName]
    teamMember.id = id
    setId(id + 1)

    if (existingTeam) {
      setTeams({ ...teams, [teamName]: [...existingTeam, teamMember] })
    } else {
      setTeams({ ...teams, [teamName]: [teamMember] })
    }

    setMemberToEdit(undefined)
  }

  return (
    <div className="App">
      <Form
        memberToEdit={memberToEdit}
        teamToEdit={teamToEdit}
        editMember={editMember}
        addMember={addMember}
      />
      {Object.keys(teams).map(
        (teamName: string): ReactElement => (
          <TeamCard
            key={teamName}
            name={teamName}
            members={teams[teamName]}
            setMemberToEdit={setMemberToEdit}
            setTeamToEdit={setTeamToEdit}
          />
        )
      )}
    </div>
  )
}

export default App
