"use client";

import Image from 'next/image';
import React from 'react';
import logo from '../../components/img/yamya1.png';
import Ts from '@/components/Ts';
import CustomizedTimeline from '@/components/Timeline';
import AboutUsTimeline from '@/components/Timeline';

const AboutPage: React.FC = () => {
    return (
        <section>
            <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 ">
    <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
    {/* <p className="text-lg mb-8 text-center">
    We believe that our success is driven by our talented and dedicated team. That's why we are committed to offering a comprehensive and rewarding benefits package designed to support your well-being, professional growth, and overall job satisfaction.
    </p> */}
    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
    </button> */}
    </div>
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
        {/* Left Content */}
        <div className="max-w-lg">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">About Us</h3>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Helping businesses <span className="text-green-600">succeed</span> through the power of video.
          </h1>
          <p className="text-gray-600 mt-4">
            Video is the future of business in this digital-focused world.
            Vidyard uses video to change the way companies connect and
            communicate. We help organizations of all sizes humanize their
            communications and personalize their customer experiences.
          </p>
          
        </div>
  
        {/* Right Image */}
        <div className="relative mt-10 md:mt-0">
          <div className="absolute -top-6 -left-6 bg-green-600 rounded-full w-32 h-32 opacity-20"></div>
          <Image
            src={logo} // Change this to your image path
            width={500}
            height={500}
            alt="Woman working on laptop"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
   
<Ts/>

<AboutUsTimeline />

      </section>
    );
};

export default AboutPage;