import { format } from 'date-fns'
import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import firebase from 'firebase'
import PageWrapper from '../components/PageWrapper'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import Form from '../components/Form'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import { AuthContext } from '../context/AuthContext'
import { getUsername } from '../utils/userHelpers'
import Loader from '../components/Loader'

const CurrentPool = () => {
  const { id } = useParams()
  const [currentPool, setCurrentPool] = useState(null)
  const { user } = useContext(AuthContext)
  const db = firebase.database()

  const formatLastUpdate = timestamp => {
    console.log('TS ', timestamp)
    const date = new Date(parseInt(timestamp))
    console.log('DATE ', date)

    return format(date, 'MMM, do @ h:mm aa')
  }

  useEffect(() => {
    if (user && user.email) {
      const username = getUsername(user.email)

      db.ref(`/users/${username}/pools`).once('value', data => {
        console.log(' DATA ', { data: data.val(), id })
        if (data && data.val()) {
          const existingPool = data
            .val()
            .find(p => p.id.toString() === id.toString())

          if (existingPool && existingPool.id) {
            setCurrentPool(existingPool)
          }
        }
      })
    }
  }, [user])

  console.log('CURRENT POOL! ', currentPool)

  return (
    <PageWrapper
      alignItems="center"
      justifyContent="center"
      width="100%"
      margin="auto"
    >
      {!currentPool ? (
        <Flex p="100px">
          <Loader size="60px" />
        </Flex>
      ) : (
        <Box>
          <Text as="h2" fontSize="32px">
            {currentPool.name}
          </Text>
          <Text>{`Last Update: ${formatLastUpdate(
            currentPool.lastUpdate,
          )}`}</Text>
        </Box>
      )}
    </PageWrapper>
  )
}

export default CurrentPool
