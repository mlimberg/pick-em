import React, { useContext } from 'react'
import styled from 'styled-components'
import Box from './Box'
import Text from './Text'
import { signOut } from '../utils/signInOut'
import { AuthContext } from '../context/AuthContext'

const MenuItem = styled(Box)`
  padding: 8px;

  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`

const UserMenu = ({ onSignOut }) => {
  const { setUser } = useContext(AuthContext)
  const onComplete = () => setUser(null)

  return (
    <Box
      position="absolute"
      width="200px"
      backgroundColor="white"
      borderRadius="6px"
      border="1px solid black"
      right="0"
      top="5rem"
    >
      <MenuItem
        onClick={() => signOut({ onComplete })}
      >
        <Text>Sign Out</Text>
      </MenuItem>
    </Box>
  )
}

export default UserMenu
