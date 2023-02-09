import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function FiberWire() {
    
    const wireRef = useRef();

    useFrame(() => {
        wireRef.current.rotation.x -= 0.01;
        wireRef.current.rotation.y -= 0.01;
    })

    return (
        <mesh ref={wireRef}>
            <boxGeometry args={[3,3,3]} />
            <meshBasicMaterial wireframe transparent color={0xdadada} />
        </mesh>
    );

}