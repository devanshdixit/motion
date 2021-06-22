import React, { Fragment } from 'react';
import { Nav,Navbar,Button,Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  IfFirebaseAuthed,
	IfFirebaseUnAuthed,
  FirebaseAuthConsumer
  } from "@react-firebase/auth";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
const Menu = (props) => {
    return (
      <Navbar bg="white" expand="lg">
      <Container>
        <FirebaseAuthConsumer>
          {({isSignedIn}) => {
             if (isSignedIn === true) {
            return <LinkContainer to="/dashboard">
      <Navbar.Brand ><h3>Motion</h3></Navbar.Brand>
      </LinkContainer>
            } else {
             return <LinkContainer to="/">
              <Navbar.Brand ><h3>Motion</h3></Navbar.Brand>
              </LinkContainer>
            }
}}
        
      </FirebaseAuthConsumer>
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
        <IfFirebaseUnAuthed>
    							{({ firebase }) => (
                    <Fragment>
        <LinkContainer to="/signin"><Nav.Link><Button variant="outline-dark">Signin</Button></Nav.Link></LinkContainer>
        <LinkContainer to="/register"><Nav.Link><Button variant="dark">Register</Button></Nav.Link></LinkContainer>
        </Fragment>
                  )}
        </IfFirebaseUnAuthed>
        <IfFirebaseAuthed>
          {({isSignedIn}) =>(
            <Nav.Link><Button  onClick={async () => {
              await firebase.auth().signOut();
              props.history.replace('/')
            }} variant="dark">Sign Out</Button></Nav.Link>
          )}
        </IfFirebaseAuthed>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default withRouter(Menu);