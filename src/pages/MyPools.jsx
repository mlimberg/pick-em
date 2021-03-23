import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { AuthContext } from '../context/AuthContext'
import PageWrapper from '../components/PageWrapper'
import Input from '../components/Input'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Link from '../components/Link'
import PoolCard from '../components/PoolCard'
import Button from '../components/Button'
import Form from '../components/Form'
import { getUsername } from '../utils/userHelpers'

const MyPools = () => {
  const [pools, setPools] = useState([])
  const { user } = useContext(AuthContext)
  const db = firebase.database()

  useEffect(() => {
    console.log('user', user)
    if (user && user.email) {
      const username = getUsername(user.email)
      db.ref(`/users/${username}/pools`).once('value', data => {
        console.log('DATA ', data.val())
        if (data && data.val().length) {
          setPools(data.val())
        }
      })
    }
  }, [user])

  return (
    <PageWrapper
      alignItems="center"
      justifyContent="center"
      width="100%"
      margin="auto"
    >
      <Box>
        <Text as="h1" fontSize="24px">
          Active Pools:
        </Text>
        <Flex flexDirection="column">
          {pools.map(({ name, id }) => (
            <Link to={`/current-pool/${id}`} width="100%">
              <PoolCard key={id} id={id} name={name} mt="8px" />
            </Link>
          ))}
        </Flex>
      </Box>
    </PageWrapper>
  )
}

export default MyPools
