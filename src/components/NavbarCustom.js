import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import fire from '../fire.js'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function NavbarCustom({ isLoggedin }) {
  const history = useHistory();


  const signOut = () => {
    fire.auth().signOut()
    history.push('/')
  };

  if (isLoggedin) {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Exercise Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Exercise List</Nav.Link>
            <Nav.Link as={Link} to={'/Create'}>Add Exercise</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link onClick={signOut}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Exercise Tracker</Navbar.Brand>
        </Container>
      </Navbar>
    )

  }


}

export default NavbarCustom