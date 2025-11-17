import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 5000;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = 15;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    // Gradient colors from brand palette
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i3] = 0.0; // R
      colors[i3 + 1] = 0.4; // G
      colors[i3 + 2] = 1.0; // B (brand-primary #0066FF)
    } else if (colorChoice < 0.66) {
      colors[i3] = 0.0; // R
      colors[i3 + 1] = 0.83; // G
      colors[i3 + 2] = 1.0; // B (brand-secondary #00D4FF)
    } else {
      colors[i3] = 0.48; // R
      colors[i3 + 1] = 0.38; // G
      colors[i3 + 2] = 1.0; // B (brand-purple #7B61FF)
    }
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;

      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        const wave = Math.sin(state.clock.elapsedTime * 0.5 + i * 0.01) * 0.02;
        positions[i3 + 1] = y + wave;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[3, 0.8, 128, 16]} />
      <meshStandardMaterial
        color="#0066FF"
        wireframe
        transparent
        opacity={0.15}
        emissive="#00D4FF"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4FF" />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};
