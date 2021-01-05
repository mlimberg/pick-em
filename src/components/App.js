import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import SignIn from '../pages/SignIn'
import Header from './Header'
import Box from './Box'
import { AuthProvider } from '../context/AuthContext'
import theme from '../styles/theme'

const RouterComponent = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>hi</div>
        </Route>
        <Route path="/sign-in" >
          <SignIn />
        </Route>
      </Switch>
    </>
  </Router>
)

const Container = styled(Box)`
  max-width: 100vw;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AuthProvider>
          <RouterComponent />
        </AuthProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
