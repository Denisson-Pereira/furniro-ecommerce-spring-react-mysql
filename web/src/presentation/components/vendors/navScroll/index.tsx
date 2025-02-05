import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../../assets/svg/logo.svg'

import './navScroll.styles.sass'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/authContext';
import { capitalizeWord } from '../../../../shared/utils/capitalizeWord/capitalizeWord';
import { SelecContainer } from '../..';
import { useTranslation } from 'react-i18next';

export function NavScroll() {
  const { user } = useAuthContext();
  const { t } = useTranslation();
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
            <Nav.Link as={Link} to={"/"} className='text-dark'>{t("navbar.home")}</Nav.Link>
            <Nav.Link as={Link} to={"/shop"} className='text-dark'>{t("navbar.shop")}</Nav.Link>
            <Nav.Link  as={Link} to={"/contact"} className='text-dark'>{t("navbar.contact")}</Nav.Link>
            <Nav.Link  as={Link} to={"/favorities"} className='text-dark'>{t("navbar.favorities")}</Nav.Link>
            <Nav.Link  as={Link} to={"/cart"} className='text-dark'>{t("navbar.cart")}</Nav.Link>
            {user.first_name ? (
              <Nav.Link  as={Link} to={"/profile"} className='text-dark'>{capitalizeWord(user.first_name)}</Nav.Link>
            ) : (
              <Nav.Link  as={Link} to={"/profile"} className='text-dark'>{t("navbar.profile")}</Nav.Link>
            )}
            <SelecContainer />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}