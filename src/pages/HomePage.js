import Container from 'react-bootstrap/Container';
import Body from '../components/Body';
import Cube from '../components/Cube';
import Enter from '../components/Enter';
import FiberCube from '../components/FiberCube';
import FiberGroup from '../components/FiberGroup';
import FiberWire from '../components/FiberWire';
import { Canvas } from '@react-three/fiber';
import Header from '../components/Header';

export default function AboutPage() {
    return (
        <Container fluid>
            <Header />
            <Canvas 
                shadows 
                camera={{ position: [0,0,5 ]}} 
                className="Three" 
                style={{ 
                    width: "100%", 
                    height:"800px",
            }}>
                <FiberGroup>
                    <FiberCube />
                    <FiberWire />
                </FiberGroup>
                <ambientLight args={[0xffffff]} intensity='0.2'  />
                <pointLight args={[0xffffff]} intensity='1' position={[25, 50, 25 ]}  />
            </Canvas>
            <Enter />
        </Container>
        /*
        <Container fluid>
            <Cube />
            <Enter />
        </Container>
        */
        
        /*
        <Body>
            <Cube />
        </Body>
        */
  );
}