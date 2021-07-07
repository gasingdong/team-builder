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

  const validate = (team: string, member: TeamMember): boolean => {
    if (!team || !member.name || !member.email || !member.role) {
      alert('All fields are required!')
      return false
    }
    if (!RegExp('^[A-Z0-9 ]+$', 'gi').test(team)) {
      alert('Team names can only have letters, numbers, and spaces')
      return false
    }
    //Name validation
    if (!RegExp('^[A-Z ]+[A-Z]$', 'gi').test(member.name)) {
      alert('Names can only have letters and spaces')
      return false
    }
    //E-mail validation
    if (!RegExp('^[A-Z0-9]+@[A-Z0-9.-]+.[A-Z]{2,}$', 'gi').test(member.email)) {
      alert('Please enter a valid e-mail')
      return false
    }
    //Role validation
    if (!RegExp('^[A-Z ]+[A-Z]$', 'gi').test(member.role)) {
      alert('Roles can only have letters and spaces')
      return false
    }
    return true
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (!validate(team, teamMember)) {
      return
    }

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
      <input
        type="text"
        id="team"
        value={team}
        onChange={onChangeTeam}
        disabled={memberToEdit ? true : false}
      />
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
