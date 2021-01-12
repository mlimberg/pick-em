import React, { useContext } from 'react'
import firebase from 'firebase'
import PageWrapper from '../components/PageWrapper'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'
import { AuthContext } from '../context/AuthContext'

const NewPickem = () => {
  const { user } = useContext(AuthContext)
  const db = firebase.database()

  const onSubmit = () => {
    db.ref(`pickemName`).set({ id: '123', name: 'new new new new pickem' });
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
        <Input
          placeholder="Name"
          mb="8px"
        />
        <Button type="submit">submit</Button>
      </Form>
    </PageWrapper>
  )
}

export default NewPickem
