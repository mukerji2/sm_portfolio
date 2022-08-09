import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Wave } from 'react-animated-text';

export default function Header() {
    return (
      <Navbar sticky="top" className="Header">
        <Container fluid className="justify-content-center">
          <Navbar.Brand> 
            <Wave text="Shefali Mukerji" effect="verticalFadeIn" effectDirection="up" iterations="1" speed="10"/> 
            </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }