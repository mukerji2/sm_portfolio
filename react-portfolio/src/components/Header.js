import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
      <Navbar sticky="top" className="Header">
        <Container fluid className="justify-content-center">
          <Navbar.Brand> Shefali Mukerji </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }