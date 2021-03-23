import React from 'react'
import PageWrapper from '../components/PageWrapper'
import Flex from '../components/Flex'

const Home = () => {
  return (
    <PageWrapper>
      <Flex width="100%">
        <img
          src="https://s.espncdn.com/stitcher/sports/football/nfl/events/401030918.png?templateId=espn.com.share.1"
          alt="vikes dolphins"
          width="60%"
        />
      </Flex>
    </PageWrapper>
  )
}

export default Home
