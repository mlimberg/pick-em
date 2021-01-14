import React, { useContext, useState } from 'react'
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

    db.ref(poolName).set({
      id,
      name: poolName,
      members
    });

    members.forEach(email => {
      const username = getUsername(email)
      const userPoolRef = db.ref(`/users/${username}/pools`)
      userPoolRef.once('value', data => {
        const newPool = { name: poolName, id }
        const currentPools = data.val()

        if (currentPools) {
          userPoolRef.set([...currentPools, newPool])
        } else {
          userPoolRef.set([newPool])
        }
      })
    })
  }

  const onSubmit = () => {
    db.ref(poolName).once('value', data => {
      const pool = data.val()

      if (pool && pool.id) {
        setNameExists(true)
      } else {
        addPool()
      }
    })
  }

  console.log('stuff ', { poolName, emailList })

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
          <Text
            fontSize="18px"
            color="error"
            mb="8px"
          >
            Name Exists! Choose another name.
          </Text>
        )}
        <Input
          handleChange={(val) => {
            setPoolName(val.toUpperCase())
            setNameExists(false)
          }}
          placeholder="Name"
          mb="8px"
          error={nameExists}
          modifyText={(v) => v.toUpperCase()}
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
