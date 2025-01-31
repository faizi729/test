"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.rings.min.js";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      import("vanta/dist/vanta.rings.min.js").then((VANTA) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE, // Ensure THREE.js is provided
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
          })
        );
      });
    }
    return () => {
      if (vantaEffect) vantaEffect;
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(30,30,30,1) 90%)",
      }}
    ></div>
  );
};

export default VantaBackground;
