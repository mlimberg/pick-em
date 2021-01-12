import React from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'

const MyPools = () => {
  const { id } = useParams()

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
