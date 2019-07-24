import React, { ReactElement, useState } from 'react'
import { TeamMember } from '../App'

interface FormProps {
  addToTeam: (team: string, teamMember: TeamMember) => void
}

function Form(props: FormProps): ReactElement {
  const [teamMember, setTeamMember] = useState<TeamMember>({
    name: '',
    email: '',
    role: '',
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTeamMember({ ...teamMember, [event.target.id]: event.target.value })
  }

  return (
    <form>
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
    </form>
  )
}

export default Form
