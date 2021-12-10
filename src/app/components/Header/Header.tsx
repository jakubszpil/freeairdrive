import { APP_PATHS } from 'app/contants';
import auth from 'app/services/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  const isAuth = auth.isAuthenticated;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top" collapseOnSelect>
      <Container fluid="lg">
        <LinkContainer to={APP_PATHS.HOME}>
          <Navbar.Brand>awPark</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!isAuth ? (
            <>
              <Nav className="me-auto">
                <LinkContainer to={APP_PATHS.HOME}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={APP_PATHS.PRICING}>
                  <Nav.Link>Pricing</Nav.Link>
                </LinkContainer>
                <LinkContainer to={APP_PATHS.ABOUT}>
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to={APP_PATHS.CAREER}>
                  <Nav.Link>Career</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to={APP_PATHS.LOGIN}>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to={APP_PATHS.SIGNUP}>
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
              </Nav>
            </>
          ) : (
            <Nav className="mr-auto">
              <LinkContainer to="/service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
