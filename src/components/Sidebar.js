import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';

export default function Sidebar() {
  return (
      <Navbar sticky="top" className="d-flex flex-column justify-content-evenly Sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/about">Professional</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/explore">Personal</Nav.Link>
      </Nav.Item>
    </Navbar>
    
  );
}