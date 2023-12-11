"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { type Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
}

const Box: React.FC<BoxProps> = (props) => {
  const mesh = useRef<Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  // Constant rotation speed
  const rotationSpeed = 0.0015;
  const [targetRotationSpeed, setTargetRotationSpeed] = useState(rotationSpeed);
  const [currentRotationSpeed, setCurrentRotationSpeed] =
    useState(rotationSpeed);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setLastMousePosition({ ...mousePosition });
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    const resetMousePosition = () => {
      setLastMousePosition({ x: 0, y: 0 });
      setMousePosition({ x: 0, y: 0 });
      setTargetRotationSpeed(rotationSpeed);
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", resetMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", resetMousePosition);
    };
  }, [mousePosition]);

  useFrame(() => {
    if (mesh.current) {
      // Adjust rotation speed based on mouse position
      const mouseMoveDistance = Math.sqrt(
        Math.pow(mousePosition.x - lastMousePosition.x, 2) +
          Math.pow(mousePosition.y - lastMousePosition.y, 2),
      );
      const additionalSpeed = mouseMoveDistance / 1000;
      setTargetRotationSpeed(rotationSpeed + additionalSpeed);

      const newRotationSpeed = THREE.MathUtils.lerp(
        currentRotationSpeed,
        targetRotationSpeed,
        0.05,
      );
      setCurrentRotationSpeed(newRotationSpeed);

      mesh.current.rotation.y += newRotationSpeed;
      mesh.current.rotation.x += newRotationSpeed;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[10, 10, 10]} />
      <meshBasicMaterial color={"gray"} wireframe={true} />
    </mesh>
  );
};

export const Background: React.FC = () => {
  const positions: [number, number, number][] = [
    [-1.2, 0, 0],
    [1.2, 0, 0],
    [0, -1.2, 0],
    // Add more positions here
  ];

  return (
    <Canvas style={{ position: "absolute", width: "100%", height: "100%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {positions.map((position, index) => (
        <Box key={index} position={position} />
      ))}
    </Canvas>
  );
};

export default Background;
