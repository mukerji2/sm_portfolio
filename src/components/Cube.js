import Container from 'react-bootstrap/Container';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as THREE from 'three';
//import { Flow } from 'three/examples/jsm/modifiers/CurveModifier.js';

export default function Cube() {
    const mountRef = useRef(null);
    
    /* Need to use useLayoutEffect instead of useEffect b/c useEffect causes error on first render away from three.js page */
    useLayoutEffect(() => {

        let scene = new THREE.Scene();
        let stop = false;
        /** Params */
        /** field of view(FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees.) */
        /** aspect ratio (use element width/height otherwise squished) */
        /** near clipping pane */
        /** far clipping pane */
        let camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth/mountRef.current.clientHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer({ alpha:true });
        
        renderer.setSize( mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setClearColor(0x000000, 0);

        mountRef.current.appendChild(renderer.domElement);
        
        /** define shape geometry and material */
        let geoCube = new THREE.BoxGeometry( 1, 1, 1 );
        let matCube = new THREE.MeshStandardMaterial( {
            color: 0xff0051, 
        });
        let cube = new THREE.Mesh( geoCube, matCube );

        
        
        /** By default, scene.add() adds to co-ord (0,0,0). move camera out (change z pos below) to avoid camera and cube being inside each other */
        
        //scene.add( cube );
        
        camera.position.z = 5;

        /** ambient light is omnipresent and applied to everything equally. It cannot cast shadows because it has no direction. It will just change how our colors appear. */
        let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        /** light from point light will spread in all directions equally from the point of origin. */
        let pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set( 25, 50, 25 );
        scene.add( pointLight );

        /** wireframe box */
        let geoWire = new THREE.BoxGeometry(3,3,3);
        let matWire = new THREE.MeshBasicMaterial({
            color: "#dadada", 
            wireframe: true, 
            transparent: true,
        });

        let wire = new THREE.Mesh(geoWire, matWire);
        //scene.add(wire)

        

        
        const cubeGroup = new THREE.Group();
        cubeGroup.add( cube );
        cubeGroup.add( wire );

        scene.add(cubeGroup)
        



        /** flow stuff */
        /*
        const somePoints = [

            new THREE.Vector3(  1,   0, 3 ),
            new THREE.Vector3( -1, 0, -3),
        ];
        
        const curve = new THREE.CatmullRomCurve3( somePoints );	
        curve.closed = true;
        
        const points = curve.getPoints( 60 );

        const line = new THREE.LineLoop( new THREE.BufferGeometry( ).setFromPoints( points ), new THREE.LineBasicMaterial( { color: 0xffffaa } ) );
        scene.add( line );

        const flow = new Flow(cubeGroup);
        flow.updateCurve(0, curve);
        scene.add(flow.object3D);
        */


        /** zoom in/zoom out toggle for camera animation */
        let inc = true;
    
        /** function that renders / animates things inside scene */
        /** creates loop that renders every screen refresh (usually 60 times per second) */
        let animate = function () {
            
            /** zoom in/zoom out toggle for camera animation */
            if (cubeGroup.position.z <= -4 || cubeGroup.position.z >= 2) {
                inc = !inc;
            }
            
            if (!stop) {
                cube.rotation.x += 0.02;
                cube.rotation.y += 0.02;
                wire.rotation.x -= 0.01;
                wire.rotation.y -= 0.01;
                if (inc) {
                    cubeGroup.position.z += 0.015;
                } else {
                    cubeGroup.position.z -= 0.015;
                }
            }
            

            //flow.moveAlongCurve(0.0006);
            renderer.render( scene, camera );

            requestAnimationFrame( animate );
            
        };

        /** update size if window is changed */
        let onWindowResize = function () {
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( mountRef.current.clientWidth, mountRef.current.clientHeight );
        }

        let cubeClick = function(event) {
            stop = !stop;
            console.log('clicked!');
            console.log(event);
            console.log('cubeX', cube.position.x);
        }

        window.addEventListener("resize", onWindowResize, false);
        window.addEventListener("click", cubeClick, false);
      
        
        animate();

        return (() => {
            if(mountRef.current !== null)
                console.log('returning');
                console.log(mountRef.current);
                mountRef.current.removeChild( renderer.domElement);
        })
        
        
    }, []); 
    
    return (
        <Container fluid className="Three">
            <div
                ref={mountRef}
                style={{ width: "90%", height:"800px", margin: "5px" }}
            ></div>
        </Container>
    )
    
    
}