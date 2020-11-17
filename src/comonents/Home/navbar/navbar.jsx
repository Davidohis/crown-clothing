import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.scss'
import Logo from '../../../assets/img/logo.png';
function NavBar() {
    return (
      <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/"><img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-sm-3">
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Action</NavDropdown.Item>
            <NavDropdown.Item href="/">Another action</NavDropdown.Item>
            <NavDropdown.Item href="/">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/shop">Start Learning</Nav.Link>
          <Nav.Link href="/" className="mr-sm-3">
           start Teaching 
          </Nav.Link>
          <Button variant="outline-primary" className="mr-sm-2">
              Log in
          </Button>
          <Button variant="primary">Sign up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </>
    )
}

export default NavBar;
