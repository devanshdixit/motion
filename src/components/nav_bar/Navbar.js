import React from 'react';
import { Nav,Navbar,Button,Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => {
    return (
      <Navbar bg="white" expand="lg">
      <Container>
        <LinkContainer to="/">
      <Navbar.Brand ><h3>Motion</h3></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ml-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <LinkContainer to="/login"><Nav.Link><Button variant="outline-dark">Signin</Button></Nav.Link></LinkContainer>
        <LinkContainer to="/register"><Nav.Link><Button variant="dark">Register</Button></Nav.Link></LinkContainer>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Menu;