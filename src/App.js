import './App.css'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

import Geo from './pages/Geo'
import OfflineNotes from './pages/OfflineNotes'
import Camera from './pages/Camera'
import Reachability from './pages/Reachability'
import DevicePosition from './pages/DevicePosition'

setupLogRocketReact(LogRocket)
LogRocket.init(process.env.REACT_APP_LOGROCKET_ID, {
  release: process.env.COMMIT_REF,
  console: {
    isEnabled: {
      log: false,
      debug: false,
      error: true,
      warn: true,
      info: false,
    },
  },
})

function App () {
  const onClick = () =>{
    throw new Error("Crash App Button was clicked")
  }
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
                <p>and this is button for crashing app  <Button variant="danger" onClick={onClick}>CrashApp</Button></p>
              </Route>
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
