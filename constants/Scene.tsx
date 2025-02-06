import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    material_0: THREE.Material;
  };
};

// Use forwardRef to allow animations from parent components
export const Model = forwardRef<THREE.Group, JSX.IntrinsicElements["group"]>((props, ref) => {
  const { nodes, materials } = useGLTF("/scene.gltf") as unknown as GLTFResult; // Ensure correct path

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
});

// ✅ Add a display name to fix ESLint warning
Model.displayName = "AstronautModel";

// Preload model for performance
useGLTF.preload("/scene.gltf");
