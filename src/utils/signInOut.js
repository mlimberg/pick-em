import firebase from 'firebase'
import ls from 'local-storage'

export const signIn = ({ onComplete, onError }) => {
  const provider = new firebase.auth.GoogleAuthProvider()

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log('RESLUT', result)
      if (result && result.user) {
        const { user: { uid, photoURL, email, displayName } } = result

        const userData = {
          id: uid,
          photo: photoURL,
          name: displayName,
          email,
        }

        onComplete(userData)

        ls.set('pickem', userData)
      }
    }).catch((error) => {
      if (error && error.message) {
        onError(error.message)
      }
    })
}

export const signOut = ({ onComplete }) => {
  firebase.auth().signOut().then((res) => {
    ls.remove('pickem')
    onComplete()
  }).catch((error) => {
    alert('WAT?!')
  })
}