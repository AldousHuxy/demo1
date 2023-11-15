import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

type CounterProps = {
    initialCount: number
}

export const Header = ({ initialCount }: CounterProps) => {
    return (
        <Navbar expand="md" className="bg-body-tertiary mb-2">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/usestate">State</Nav.Link>
                    <Nav.Link as={NavLink} to="/usereducer">Reducer</Nav.Link>
                    <Nav.Link as={NavLink} to="/contextapi">Context</Nav.Link>
                    <Nav.Link as={NavLink} to="/localstorage">Local Storage</Nav.Link>
                    <Nav.Link as={NavLink} to={`/useparams/${initialCount}`}>Params</Nav.Link>
                    <Nav.Link as={NavLink} to="/zustand">Zustand</Nav.Link>
                    <Nav.Link as={NavLink} to="/redux">Redux</Nav.Link>
                    {/* <Nav.Link as={NavLink} to="/useeffect">Effects</Nav.Link> */}
                    {/* <Nav.Link as={NavLink} to="/usememo">Memos</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}