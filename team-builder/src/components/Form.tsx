import React, { ReactElement, useState, useEffect } from 'react'
import { TeamMember } from '../App'

interface FormProps {
  teamToEdit: string
  memberToEdit: TeamMember | undefined
  addMember: (team: string, teamMember: TeamMember) => void
  editMember: (team: string, teamMember: TeamMember) => void
}

function Form({
  teamToEdit,
  memberToEdit,
  editMember,
  addMember,
}: FormProps): ReactElement {
  const [team, setTeam] = useState<string>('')
  const [teamMember, setTeamMember] = useState<TeamMember>({
    id: 0,
    name: '',
    email: '',
    role: '',
  })

  useEffect((): void => {
    if (memberToEdit) {
      setTeam(teamToEdit)
      setTeamMember(memberToEdit)
    } else {
      setTeam('')
      setTeamMember({
        id: 0,
        name: '',
        email: '',
        role: '',
      })
    }
  }, [memberToEdit, teamToEdit])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    memberToEdit ? editMember(team, teamMember) : addMember(team, teamMember)
    setTeam('')
    setTeamMember({
      id: 0,
      name: '',
      email: '',
      role: '',
    })
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
