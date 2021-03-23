import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import PageWrapper from '../components/PageWrapper'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import Form from '../components/Form'
import Text from '../components/Text'
import { AuthContext } from '../context/AuthContext'
import { getUsername } from '../utils/userHelpers'

const NewPool = () => {
  const history = useHistory()
  const [poolName, setPoolName] = useState('')
  const [emailList, setEmailList] = useState('')
  const [nameExists, setNameExists] = useState(false)
  const { user } = useContext(AuthContext)
  const db = firebase.database()

  const addPool = () => {
    const id = Date.now()
    const members = [user.email]

    if (emailList.length) {
      emailList.split(',').forEach(em => members.push(em))
    }

    const newPoolData = {
      id,
      name: poolName,
      members,
      lastUpdate: id,
    }

    db.ref(`pools/${id}`).set(newPoolData)

    members.forEach(email => {
      const username = getUsername(email)
      const userPoolRef = db.ref(`/users/${username}/pools`)

      userPoolRef
        .once('value', data => {
          const currentPools = data.val()

          if (currentPools) {
            userPoolRef.set([...currentPools, newPoolData])
          } else {
            userPoolRef.set([newPoolData])
          }
        })
        .then(() => history.push(`current-pool/${id}`))
    })
  }

  const onSubmit = () => {
    const username = getUsername(user.email)

    db.ref(`users/${username}`).once('value', data => {
      const pools = data?.val()?.pools
      const poolExists =
        pools && pools.length
          ? pools.find(p => p.name === poolName)
          : false

      if (poolExists && poolExists.id) {
        setNameExists(true)
      } else {
        addPool()
      }
    })
  }

  return (
    <PageWrapper
      alignItems="center"
      justifyContent="center"
      width="100%"
      margin="auto"
    >
      <Form
        handleSubmit={onSubmit}
        alignItems="left"
        flexDirection="column"
      >
        {nameExists && (
          <Text fontSize="18px" color="error" mb="8px">
            Name Exists! Choose another name.
          </Text>
        )}
        <Input
          handleChange={val => {
            setPoolName(val.toUpperCase())
            setNameExists(false)
          }}
          placeholder="Name"
          mb="8px"
          error={nameExists}
          modifyText={v => v.toUpperCase()}
        />
        <TextArea
          handleChange={setEmailList}
          placeholder="Enter all participant emails, separated by a comma"
          mb="8px"
        />
        <Button type="submit">submit</Button>
      </Form>
    </PageWrapper>
  )
}

export default NewPool
