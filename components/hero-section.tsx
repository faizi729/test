"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import yamya from "./img/hero.png";
import { motion } from "framer-motion";

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
            We transform ideas into powerful digital solutions. Our expert team delivers cutting-edge software development, mobile applications, and enterprise solutions.
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
