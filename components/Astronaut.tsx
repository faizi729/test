import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { Model } from "@/constants/Scene"; // Import the Model component

function AstronautModel() {
  const astronautRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (astronautRef.current) {
      gsap.to(astronautRef.current.rotation, {
        y: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return <Model ref={astronautRef} />;
}

export function AstronautScene() {
  return (
    <Canvas>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Astronaut model with animation */}
      <AstronautModel />

      {/* OrbitControls for interaction */}
      <OrbitControls />
    </Canvas>
  );
}
