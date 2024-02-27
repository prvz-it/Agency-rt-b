import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './Menu.css';

const Menu = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/about_us">About Us</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/work">Work</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
          <div className="menu-btn">
            <Link to="/contact_us">Contact Us</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu