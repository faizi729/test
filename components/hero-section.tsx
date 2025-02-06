"use client";
<<<<<<< HEAD

import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import yamya from "./img/hero.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-5 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side Content */}
        <motion.div 
          className="max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Gradient Heading */}
          <motion.h1
            className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Yamya Software Solutions
          </motion.h1>

          <motion.p
                  className="mt-6 text-lg text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  We transform ideas into powerful digital solutions. Our expert team delivers{" "}
                  <span className="text-white font-semibold">
                    <Typewriter
                      options={{
                        strings: [
                          "Software Development.",
                          "Mobile Applications.",
                          "Enterprise Solutions.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                 </span>
           </motion.p>
        </motion.div>

        {/* Right Side Image with Floating Animation */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }} // Floating effect
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image 
              src={yamya} 
              alt="Yamya Software Solutions" 
              width={700} 
              height={700} 
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
=======
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
>>>>>>> 0463540 (first commit)
