import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar className="custom-nav-style" fixed="top">
      <div className="custom-nav container-xl">
        <Navbar.Brand href="#home">Dan Galera</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Works</Nav.Link>
            <Nav.Link
              href="http://bit.ly/3drdnXB"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
