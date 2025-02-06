"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "./Button";



export const HeroSection = () => {
  useEffect(() => {
    // GSAP Animation for moving logos
    gsap.fromTo(
      ".logo-container",
      {
        x: "100%", // Starting position (off-screen right)
      },
      {
        x: "-100%", // Ending position (off-screen left)
        duration: 30, // Duration of the animation (slower for smoothness)
        ease: "none", // Linear movement for constant speed
        repeat: -1, // Infinite loop
      }
    );
  }, []);

  return (
    <main className="w-full h-screen relative">
      <div className="absolute top-20 left-10 pt-[100px]">
        <h1 className="text-white text-5xl font-bold font-poppins">
          YAMYA SOLUTIONS PVT LTD.
        </h1>
        <em>
          <p className="text-white font-700 text-3xl mt-11 font-roboto">
            "Transforming Ideas into Digital Reality"
          </p>
        </em>
        <div className="font-bold text-white text-5xl w-[50%] pt-[30px] tracking-widest font-sans">
          <h1>
            We build stunning websites, mobile apps, and cutting-edge software
            solutions to <span className="text-[#708090] font-bebus font-bold">Elevate Your Business!</span>
          </h1>
        </div>
        <div className="mt-[40px]">
          <Button />
        </div>
      </div>

      {/* Trusted By Section with Moving Logos */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <h2 className="text-gray-400 text-xl font-semibold text-center mb-4">
          Trusted by leading companies
        </h2>

        <div className="w-full flex items-center justify-center overflow-hidden">
          {/* Logo Container with GSAP Animation */}
          <div className="logo-container flex gap-40 cursor-pointer pt-5">
            {/* Logos - Duplicated for Smooth Scrolling */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  width={100}  // Reduced size
                  height={50}
                  className="transition duration-300"
                />
                
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
                  alt="Tesla"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
                  alt="Netflix"
                  width={100}  // Reduced size
                  height={50}
                  className="transition duration-300"
                />
                

                
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  alt="IBM"
                  width={100}  // Reduced size
                  height={50}
                  className=" transition duration-300"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
