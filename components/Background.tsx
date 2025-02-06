'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import background from '@/public/assets/background.svg';

const Background = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scaleY:1.09,
      scaleX:1.09,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <Image 
      ref={imageRef}
      src={background}
      alt="background"
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Background;