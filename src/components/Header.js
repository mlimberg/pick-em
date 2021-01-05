import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Flex from './Flex'
import Logo from './Logo'
import { AuthContext } from '../context/AuthContext'

const Container = styled(Flex)`
  width: inherit;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 16px;
`

const Nav = styled(NavLink)`
  font-size: 24px;
`

const Header = () => {
  const { user } = useContext(AuthContext)
  console.log('USER', user)

  return (
    <Container
      backgroundColor="dolphinsTeal"
    >
      <Nav to="/">
        <Logo />
      </Nav>
      {!user && (
        <Nav to="/sign-in">
          Sign In
        </Nav>
      )}
      {user && (
        <img src={user?.photo} alt="profile" />
      )}
    </Container>
  )
}

export default Header
