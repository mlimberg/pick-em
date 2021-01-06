import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Box from './Box'
import Home from '../pages/Home'
import NewPickem from '../pages/NewPickem'
import { AuthProvider } from '../context/AuthContext'
import theme from '../styles/theme'

const RouterComponent = () => (
  <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new-pickem">
          <NewPickem />
        </Route>
      </Switch>
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
