import React, { ReactElement } from 'react'
import { TeamMember } from '../App'
import TeamMemberCard from './TeamMemberCard'

interface TeamInfo {
  name: string
  members: TeamMember[]
  setMemberToEdit: (member: TeamMember) => void
  setTeamToEdit: (team: string) => void
}

function TeamCard({
  name,
  members,
  setMemberToEdit,
  setTeamToEdit,
}: TeamInfo): ReactElement {
  return (
    <div>
      <h1>{name}</h1>
      {members.map(
        (member: TeamMember): ReactElement => (
          <TeamMemberCard
            key={`${name}-${member.name}`}
            member={member}
            setMemberToEdit={setMemberToEdit}
            team={name}
            setTeamToEdit={setTeamToEdit}
          />
        )
      )}
    </div>
  )
}

export default TeamCard
