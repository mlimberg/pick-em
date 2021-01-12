import '../styles/reset.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Box from './Box'
import Home from '../pages/Home'
import NewPool from '../pages/NewPool'
import MyPools from '../pages/MyPools'
import { AuthProvider } from '../context/AuthContext'
import theme from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'


const RouterComponent = () => (
  <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new-pool">
          <NewPool />
        </Route>
        <Route path="/:id/my-pools">
          <MyPools />
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
          <GlobalStyles />
          <RouterComponent />
        </AuthProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
