import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import Flex from './Flex'
import Logo from './Logo'
import UserMenu from './UserMenu'
import { AuthContext } from '../context/AuthContext'
import { signIn } from '../utils/signInOut'

const sharedNavStyles = css`
  font-size: 24px;
  color: ${props => props.theme.colors.white};

  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.dolphinsBlue};
  };
`

const Container = styled(Flex)`
  width: inherit;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 16px;
`

const Nav = styled(NavLink)`
  ${sharedNavStyles}
  text-decoration: none;
  margin-right: 24px;
`

const SignIn = styled('button')`
  ${sharedNavStyles}
  outline: none;
  background: none;
  border: none;
`

const UserImage = styled('img')`
  border: 3px solid white;
  border-radius: 50%;
  height: inherit;

  :hover {
    cursor: pointer;
  }
`

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const { user, setUser } = useContext(AuthContext)
  const signInUser = () => signIn({
    onComplete: setUser,
    onError: alert,
  })

  return (
    <Container
      backgroundColor="dolphinsTeal"
    >
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        width="50%"
        flex="1"
      >
        <Nav to="/">
          <Logo />
        </Nav>
        {user && (
          <Flex>
            <Nav to={`/${user.id}/my-pools`}>
              My Pools
            </Nav>
            <Nav to="/new-pool">
              New Pool
            </Nav>
          </Flex>
        )}
      </Flex>
      <Flex
        height="100%"
        position="relative"
      >
        {(user && user.photo) ? (
          <>
            <UserImage
              src={user?.photo}
              alt="profile"
              onClick={() => setMenuActive(!menuActive)}
            />
            {menuActive && <UserMenu />}
          </>
        ) : (
            <SignIn onClick={signInUser}>
              Sign In
            </SignIn>
          )}
      </Flex>
    </Container>
  )
}

export default Header
