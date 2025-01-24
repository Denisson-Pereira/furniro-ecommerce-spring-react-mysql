import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../assets/svg/logo.svg'

import './navScroll.styles.sass'
import { useAuthContext } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { capitalizeWord } from '../../../utils/capitalizeWord';

export function NavScroll() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <div className="bootstrap_img" onClick={() => navigate('/')}>
          <img src={Logo} alt="logo" />
          <p>Furniro</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto pt-2 fs-4 gap-5">
            <Nav.Link as={Link} to={"/"} className='text-dark'>Home</Nav.Link>
            <Nav.Link as={Link} to={"/shop"} className='text-dark'>Shop</Nav.Link>
            <Nav.Link  as={Link} to={"/contact"} className='text-dark'>Contact</Nav.Link>
            <Nav.Link  as={Link} to={"/favorities"} className='text-dark'>Favorities</Nav.Link>
            <Nav.Link  as={Link} to={"/cart"} className='text-dark'>Cart</Nav.Link>
            {user.first_name ? (
              <Nav.Link  as={Link} to={"/profile"} className='text-dark'>{capitalizeWord(user.first_name)}</Nav.Link>
            ) : (
              <Nav.Link  as={Link} to={"/profile"} className='text-dark'>Profile</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}