"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useScroll } from '@react-spring/web';

const ParticleSystem = ({ depth = 1, mouseInfluence = 0.3 }) => {
  const points = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);

  // Generate initial particles
  const particles = useRef(new Float32Array(500 * 3)).current;
  useEffect(() => {
    for (let i = 0; i < particles.length; i += 3) {
      particles[i] = (Math.random() - 0.5) * viewport.width * 2;
      particles[i + 1] = (Math.random() - 0.5) * viewport.height * 2;
      particles[i + 2] = (Math.random() - 0.5) * 10 * depth;
    }
  }, [depth, viewport]);

  // Mouse movement
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Scroll interaction
  const { scrollYProgress } = useScroll({
    onChange: ({ value }) => setScroll(value),
  });

  useFrame((state, delta) => {
    if (!points.current) return;
    
    // Smooth particle movement
    points.current.rotation.x = gsap.utils.interpolate(
      points.current.rotation.x,
      mouse.y * mouseInfluence,
      0.1
    );
    
    points.current.rotation.y = gsap.utils.interpolate(
      points.current.rotation.y,
      mouse.x * mouseInfluence,
      0.1
    );

    // Scroll-based Z-position
    points.current.position.z = gsap.utils.interpolate(
      points.current.position.z,
      scroll * 10 * depth,
      0.1
    );
  });

  return (
    <Points
      ref={points}
      positions={particles}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        size={0.05 * depth}
        sizeAttenuation
        depthWrite={false}
        color={new THREE.Color(`hsl(${depth * 50}, 70%, 70%)`)}
        opacity={0.5 / depth}
      />
    </Points>
  );
};

const HeroParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        className="absolute top-0 left-0"
      >
        {!isMobile && <OrbitControls enableZoom={false} />}
        
        {/* Multiple depth layers */}
        <ParticleSystem depth={0.5} mouseInfluence={0.5} />
        <ParticleSystem depth={1} mouseInfluence={0.3} />
        <ParticleSystem depth={1.5} mouseInfluence={0.2} />
        
        <ambientLight intensity={0.5} />
      </Canvas>

      {/* Hero content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Interactive Particle Field
        </h1>
        <p className="text-xl text-white opacity-80">
          Scroll and move mouse to interact
        </p>
      </div>
    </div>
  );
};

export default HeroParticles;