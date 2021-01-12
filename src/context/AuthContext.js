import { createContext, useState, useEffect } from 'react'
import ls from 'local-storage'
import { storageKey } from '../utils/signInOut'

const AuthContext = createContext({ user: null })

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!user) {
      const userData = ls.get(storageKey)

      if (userData && userData.id) {
        setUser(userData)
      }
    }
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
