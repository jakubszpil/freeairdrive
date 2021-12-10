import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function AppHeader() {
  return (
    <Navbar className="app-header" bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="me-auto">awPark</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="app-header-navigation" />
        <Navbar.Collapse id="app-header-navigation">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
