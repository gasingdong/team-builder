import React, { ReactElement } from 'react'
import { TeamMember } from '../App'

function TeamMemberCard({ name, email, role }: TeamMember): ReactElement {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>E-Mail: {email}</h2>
      <h2>Role: {role}</h2>
    </div>
  )
}

export default TeamMemberCard
