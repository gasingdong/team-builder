import React, { ReactElement } from 'react'
import { TeamMember } from '../App'
import TeamMemberCard from './TeamMemberCard'

interface TeamInfo {
  name: string
  members: TeamMember[]
}

function TeamCard({ name, members }: TeamInfo): ReactElement {
  return (
    <div>
      <h1>{name}</h1>
      {members.map(
        (member: TeamMember): ReactElement => (
          <TeamMemberCard
            key={`${name}-${member.name}`}
            name={member.name}
            email={member.email}
            role={member.role}
          />
        )
      )}
    </div>
  )
}

export default TeamCard
