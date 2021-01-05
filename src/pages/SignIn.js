import { useState, useContext } from 'react'
import firebase from 'firebase'
import Flex from '../components/Flex'
import Text from '../components/Text'
import { AuthContext } from '../context/AuthContext'

function App() {
  const [error, setError] = useState(null)
  const { user, setUser } = useContext(AuthContext)
  const provider = new firebase.auth.GoogleAuthProvider()

  const handleClick = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log('RESLUT', result)
        if (result && result.user) {
          const { user: { uid, photoURL, email, displayName } } = result

          setUser({
            id: uid,
            photo: photoURL,
            name: displayName,
            email,
          })
        }


      }).catch((error) => {
        if (error && error.message) {
          setError(error.message)
        }
      })
  }

  return (
    <div className="App">
      {error ? <h1>{error}</h1> : (
        <header className="App-header">
          {!user && <button onClick={handleClick}>Sign In</button>}
          {user && (
            <Flex>
              <Text as="h1">{`Welcome, ${user.name}`}</Text>
              {/* <img src={user.photo} alt="User Profile" /> */}
            </Flex>
          )}
        </header>
      )}
    </div>
  )
}

export default App
