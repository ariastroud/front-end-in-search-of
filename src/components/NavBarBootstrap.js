import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function BasicExample(props) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>In Search Of</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/itemslist">
              <Nav.Link>All Items</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newpostform">
              <Nav.Link>Post Now</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: {props.name}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
