import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";

import Geo from "./pages/Geo";
import OfflineNotes from "./pages/OfflineNotes";
import Camera from "./pages/Camera";
import Reachability from "./pages/Reachability";
import DevicePosition from "./pages/DevicePosition";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Osom PWA</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/geo">Geo</Nav.Link>
                        <Nav.Link href="/offline-notes">Notes</Nav.Link>
                        <Nav.Link href="/camera">Camera</Nav.Link>
                        <Nav.Link href="/reachability">Reachability</Nav.Link>
                        <Nav.Link href="/position">Position</Nav.Link>
                    </Nav>
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
                            <DevicePosition/>
                        </Route>
                    </Switch>
                    </Container>
                </main>
            </div>
        </Router>
    );
}

export default App;
