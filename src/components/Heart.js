import { useRef } from 'react';

export default function Heart() {

    const heartRef = useRef();
    return (
        <mesh ref={heartRef}>
            <shapeGeometry args={[]}>

        </mesh>
    )
}