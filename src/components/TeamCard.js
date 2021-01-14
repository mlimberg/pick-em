import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import { getTeam } from '../utils/teamHelpers'

const TeamCard = ({ teamId }) => {
  const { logo, name, division, conference } = getTeam(teamId)

  return (
    <Card>
      <Image src={`/logos/${logo}`} />
      <Flex flexDirection="column" alignItems="left">
        <TeamName>{name}</TeamName>
        <Conference>{`${conference} ${division}`}</Conference>
      </Flex>
    </Card>
  )
}

const TeamName = styled('h3')`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 8px;
  font-family: ${props => props.theme.fonts.regular}
`

const Conference = styled('p')`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.thinItalic}
`

const Card = styled(Flex)`
  height: 80px;
  margin: 16px;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 8px 8px 16px 0px rgba(224,217,224,1);
  flex: 1;
  min-width: 20%;
  justify-content: flex-start;
`

const Image = styled('img')`
  width: 56px;
  height: 56px;
  margin-right: 16px;
`

export default TeamCard