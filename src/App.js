import './App.css'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'

import Geo from './pages/Geo'
import OfflineNotes from './pages/OfflineNotes'
import Camera from './pages/Camera'
import Reachability from './pages/Reachability'
import DevicePosition from './pages/DevicePosition'

function App () {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">Osom PWA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/#/geo">Geo</Nav.Link>
              <Nav.Link href="/#/offline-notes">Notes</Nav.Link>
              <Nav.Link href="/#/camera">Camera</Nav.Link>
              <Nav.Link href="/#/reachability">Reachability</Nav.Link>
              <Nav.Link href="/#/position">Position</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main>
          <Container>
            <Switch>
              <Router path="/geo">
                <Geo/>
              </Router>
              <Router path="/offline-notes">
                <OfflineNotes/>
              </Router>
              <Router path="/camera">
                <Camera/>
              </Router>
              <Router path="/reachability">
                <Reachability/>
              </Router>
              <Router path="/position">
                <DevicePosition/>
              </Router>
              <Route>
                <h1>
                  That is my osom PWA app
                </h1>
              </Route>
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
