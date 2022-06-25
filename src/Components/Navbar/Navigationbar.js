import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navigationbar = () => {
  const linkStyle={
    padding:"5px",
    textDecoration:"none",
    color:"white"
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
    <Link to="/home" style={linkStyle}>Home</Link>
    <Link to="/sign-up" style={linkStyle}>SignUp</Link>
    
    <Link to="/members" style={linkStyle}> Members</Link>



    </Nav>
    </Container>
  </Navbar>
  <br />
  
    </div>
  );
};

export default Navigationbar;