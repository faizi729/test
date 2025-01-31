'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = ['Frameworks', 'Database', 'Languages', 'CMS', 'Others'];
const technologies = [
  { name: 'Node JS', image: '/nodejs-logo.png' },
  { name: 'Flutter', image: '/flutter-logo.png' },
  { name: 'Android Studio', image: '/androidstudio-logo.png' },
  { name: 'CodeIgniter', image: '/codeigniter-logo.png' },
  { name: 'Laravel', image: '/laravel-logo.png' },
  { name: 'Dart', image: '/dart-logo.png' },
  { name: 'Xcode', image: '/xcode-logo.png' },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Frameworks');

  return (
    <div className="flex flex-col md:flex-row bg-blue-50 p-8 min-h-screen">
      {/* Sidebar */}
      <div className="md:w-1/4 p-4 border-r border-gray-300">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 hover:text-blue-500 ${
                selectedCategory === category ? 'text-blue-600 font-bold' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section */}
      <div className="md:w-3/4 p-4 flex flex-wrap gap-4">
        <h1 className="text-2xl font-bold w-full text-center">We Serve</h1>
        <p className="text-gray-600 w-full text-center">
          We provide end-to-end software and mobile application development services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="p-4 border rounded-lg shadow-md flex flex-col items-center">
              <Image
                src={tech.image}
                alt={`${tech.name} Logo`}
                width={64}
                height={64}
                priority // Preloads images for better performance
                className="mb-2"
              />
              <div className="text-center font-semibold">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
