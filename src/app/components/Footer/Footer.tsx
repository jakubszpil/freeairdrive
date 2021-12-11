import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Footer.css';
import { APP_PATHS } from 'app/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <Nav>
        <div className="footer-left">
          <LinkContainer to={APP_PATHS.TEAM}>
            <Nav.Link>Team</Nav.Link>
          </LinkContainer>
          <LinkContainer to={APP_PATHS.CAREER}>
            <Nav.Link>Carrers</Nav.Link>
          </LinkContainer>
          <LinkContainer to={APP_PATHS.NEWS_ROOM}>
            <Nav.Link>News room</Nav.Link>
          </LinkContainer>
        </div>
        <div className="footer-center">
          <h2>awPark</h2>
          <p>Copyright &copy; 2021</p>
        </div>
        <div className="footer-right">
          <LinkContainer to={APP_PATHS.LOGIN}>
            <Nav.Link>Log in</Nav.Link>
          </LinkContainer>
          <LinkContainer to={APP_PATHS.SIGNUP}>
            <Nav.Link>Sign up</Nav.Link>
          </LinkContainer>
          <LinkContainer to={APP_PATHS.SUPPORT}>
            <Nav.Link>Support</Nav.Link>
          </LinkContainer>
        </div>
      </Nav>
    </footer>
  );
};

export default Footer;
