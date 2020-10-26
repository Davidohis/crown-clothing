import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import './navbar.scss'

function NavBar() {
    return (
      <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        <Form inline>
          <FormControl type="Search" placeholder="Search" className="ml-sm-5" />
        </Form>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Udemy for Business</Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="mr-sm-2">
            Teach on Udemy
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
