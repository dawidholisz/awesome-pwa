import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";

import Geo from "./pages/Geo";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Osom PWA</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/geo">Geolocation</Nav.Link>
                        <Nav.Link href="/offline-notes">Offline notes</Nav.Link>
                        <Nav.Link href="/camera">Camera</Nav.Link>
                        <Nav.Link href="/reachability">Reachability</Nav.Link>
                        <Nav.Link href="/position">Device position</Nav.Link>
                    </Nav>
                </Navbar>
                <main>
                    <Container>
                    <Switch>
                      <Router path="/geo">
                        <Geo/>
                      </Router>
                        <Route>
                            HomePejdz
                        </Route>
                    </Switch>
                    </Container>
                </main>
            </div>
        </Router>
    );
}

export default App;
