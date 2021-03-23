import React from 'react'
import styled from 'styled-components'
import TeamCard from '../components/TeamCard'
import Flex from '../components/Flex'
import nfl_teams from '../data/nfl_teams'

const Teams = () => {
  return (
    <Container>
      {nfl_teams.map(t => (
        <TeamCard teamId={t.id} />
      ))}
    </Container>
  )
}

const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export default Teams
