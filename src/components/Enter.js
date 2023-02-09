import Container from 'react-bootstrap/Container';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
    return (
        <Container fluid className="EnterBtn">
            <TypeAnimation
                sequence={[
                    'under construction...   come back soon!',
                ]}
                speed='1'    
            />
        </Container>

    );
}