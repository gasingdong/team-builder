import React, { ReactElement } from 'react'
import { TeamMember } from '../App'

interface TeamMemberCardProps {
  member: TeamMember
  setMemberToEdit: (member: TeamMember) => void
}

function TeamMemberCard(props: TeamMemberCardProps): ReactElement {
  const { name, email, role } = props.member
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>E-Mail: {email}</h2>
      <h2>Role: {role}</h2>
      <button onClick={(): void => props.setMemberToEdit(props.member)}>
        Edit
      </button>
    </div>
  )
}

export default TeamMemberCard
