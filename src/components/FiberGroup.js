import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function FiberGroup({ children }) {
    
    const groupRef = useRef();

    let inc=true;

    useFrame(() => {
        if (groupRef.current.position.z <= -4 || groupRef.current.position.z >= 2) {
            inc = !inc;
        }
        if (inc) {
            groupRef.current.position.z += 0.015;
        } else {
            groupRef.current.position.z -= 0.015;
        }

    })
    
    return (
        <group ref={groupRef}>
            {children}
        </group>
    );

}