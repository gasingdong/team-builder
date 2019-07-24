import React, { ReactElement, useState } from 'react'
import { TeamMember } from '../App'

interface FormProps {
  addToTeam: (team: string, teamMember: TeamMember) => void
}

function Form({ addToTeam }: FormProps): ReactElement {
  const [team, setTeam] = useState<string>('')
  const [teamMember, setTeamMember] = useState<TeamMember>({
    name: '',
    email: '',
    role: '',
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addToTeam(team, teamMember)
  }

  const onChangeTeam = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTeam(event.target.value)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTeamMember({ ...teamMember, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="team">Team:</label>
      <input type="text" id="team" value={team} onChange={onChangeTeam} />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={teamMember.name}
        onChange={onChange}
      />
      <label htmlFor="email">E-Mail:</label>
      <input
        type="text"
        id="email"
        value={teamMember.email}
        onChange={onChange}
      />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        value={teamMember.role}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default Form
