import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Text from './Text'
import { cardStyles } from '../styles/sharedStyles'

const PoolCard = ({ name, id, ...styles }) => {
  return (
    <Card {...styles} onClick>
      <Text as="h3">{name}</Text>
    </Card>
  )
}

const Card = styled(Flex)`
  ${cardStyles}
  width: 60%;
  border-radius: 6px;
  justify-content: flex-start;

  :hover {
    cursor: pointer;
  }
`

export default PoolCard
