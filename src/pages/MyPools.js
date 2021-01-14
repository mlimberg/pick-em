import React, { useEffect, useContext } from 'react'
import firebase from 'firebase'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import PageWrapper from '../components/PageWrapper'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'
import { getUsername } from '../utils/userHelpers'

const MyPools = () => {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const db = firebase.database()

  useEffect(() => {
    const username = getUsername(user.email)
    db.ref(`/users/${username}/pools`).once('value', data => {
      console.log("DATA ", data.val())
    })
  }, [user])

  return (
    <PageWrapper
      alignItems="center"
      justifyContent="center"
      width="100%"
      margin="auto"
    >
      {`Showing pools for ${id}`}
    </PageWrapper>
  )
}

export default MyPools
