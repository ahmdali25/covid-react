import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Logo from '../assets/images/logo.png'
import './Navbar.css'

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="#home">
                <img src={Logo} alt="" className="w-25"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavDropdown id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent