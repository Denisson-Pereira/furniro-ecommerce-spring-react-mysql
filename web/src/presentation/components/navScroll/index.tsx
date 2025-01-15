import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbUserExclamation } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import Logo from '../../../assets/images/logo.png'

import './navScroll.styles.sass'
import { useAuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';

export function NavScroll() {
  const { user } = useAuthContext();

  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <div className="bootstrap_img">
          <img src={Logo} alt="logo" />
          <p>Furniro</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto pt-2 fs-4 gap-5">
            <Nav.Link as={Link} to={"/"} className='text-dark'>Home</Nav.Link>
            <Nav.Link as={Link} to={"/shop"} className='text-dark'>Shop</Nav.Link>
            <Nav.Link  as={Link} to={"/about"} className='text-dark'>About</Nav.Link>
            <Nav.Link  as={Link} to={"/contact"} className='text-dark'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto pt-2 gap-2 container_icons">
            <Nav.Link href="#home" className='navbar_user'>
              {user.id ? (
                <p>{user.first_name}</p>
              ) : (
                <TbUserExclamation className='icon_react' />
              )}
            </Nav.Link>
            <Nav.Link href="#link">
              <IoIosSearch className='icon_react' />
            </Nav.Link>
            <Nav.Link href="#link">
              <IoMdHeartEmpty className='icon_react' />
            </Nav.Link>
            <Nav.Link href="#link">
              <IoCartOutline className='icon_react' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}