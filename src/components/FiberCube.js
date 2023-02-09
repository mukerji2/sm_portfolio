import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { BrowserRouter, useNavigate } from 'react-router-dom';


export default function FiberCube() {
    const cubeRef = useRef();
    //let navigate = useNavigate();

    let inc = true;

    useFrame(() => {
        cubeRef.current.rotation.x += 0.02;
        cubeRef.current.rotation.y += 0.02;
    })



    return (
        <BrowserRouter>
            <mesh ref={cubeRef}>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color={0xff0051}  />
            </mesh>
        </BrowserRouter>
            
    )
}