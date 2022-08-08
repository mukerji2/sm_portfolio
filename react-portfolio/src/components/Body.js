import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';

export default function Body({ children }) {
  return (
    <Container fluid>
      <Stack direction="horizontal" className="Body">
        <Sidebar />
        <Container fluid>
          {children}
        </Container>
        
      </Stack>
    </Container>
      
  );
}