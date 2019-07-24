import React, { ReactElement } from 'react'
import { TeamMember } from '../App'
import TeamMemberCard from './TeamMemberCard'

interface TeamInfo {
  name: string
  members: TeamMember[]
  setMemberToEdit: (member: TeamMember) => void
}

function TeamCard({ name, members, setMemberToEdit }: TeamInfo): ReactElement {
  return (
    <div>
      <h1>{name}</h1>
      {members.map(
        (member: TeamMember): ReactElement => (
          <TeamMemberCard
            key={`${name}-${member.name}`}
            member={member}
            setMemberToEdit={setMemberToEdit}
          />
        )
      )}
    </div>
  )
}

export default TeamCard
