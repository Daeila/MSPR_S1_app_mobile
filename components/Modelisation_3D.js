import React, { Suspense, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'expo-three';
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';


function CoffeeMachine (props){

  const mesh = useRef();

  const [knob, logo, metal, walkway, plastic, galaxy] = useLoader(TextureLoader,[
    require('../assets/textures/Knobs_Color.jpg'),
    require('../assets/textures/Logo_Color.jpg'),
    require('../assets/textures/Metal010_1K_Color.jpg'),
    require('../assets/textures/MetalWalkway003_1K_Color.png'),
    require('../assets/textures/NFO_Plastic008_A8.jpg'),
    require('../assets/textures/purple_galaxy_texture_by_sweetlysecret_d8i0t81.png')
  ])
  const material = useLoader(MTLLoader,require('../assets/coffeemachine.mtl'));

  const obj = useLoader(
    OBJLoader,
    require('../assets/coffeemachine.obj'), 
    (loader)=>{
      material.preload();
      loader.setMaterials(material);
    }
  );

  useLayoutEffect(()=>{
    obj.traverse((child)=>{
      if(child instanceof THREE.Mesh){
        child.material.map = knob;
        child.material.normalMap = metal;
        child.material.roughnessMap = plastic;
      }
    })
  },[obj])

  useFrame((state, delta) => {
    let { x, y, z } = props.animatedSensor.sensor.value;
    x = ~~(x * 100) / 5000;
    y = ~~(y * 100) / 5000;
    mesh.current.rotation.x += x;
    mesh.current.rotation.y += y;
  });

  return(
  <mesh ref={mesh} rotation={[0,0,0]}>
    <primitive object={obj} scale={0.3} />
  </mesh>
  );
}

 function ThreeScene(){
  const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
    interval: 100,
  });
    return (      
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <CoffeeMachine animatedSensor={animatedSensor}/>
          </Suspense>
      </Canvas>
    );
}

export default ThreeScene;

