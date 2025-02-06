<<<<<<< HEAD
"use client;";
import Image from 'next/image';
import React from 'react';
import man from '../img/working-man.png';

const jobs = [
  {
    id: 1,
    title: "Software Developer (Fresher)",
    description: "Good communication required with good knowledge of C, C++, and OOPs concepts or Core Java, advance Java.",
    image: "/images/software-dev.png", // Replace with actual path
    emailSubject: "Software Developer Application",
  },
  {
    id: 2,
    title: "Fresher React-Native Developer",
    description: "Knowledge of UI/UX design and other common Android/iOS libraries using React Native platform.",
    image: "/images/react-native.png",
    emailSubject: "React-Native Developer Application",
  },
  {
    id: 3,
    title: "BDE/Online Bidder (1+ years of experience)",
    description: "Excellent communication skills. Must have worked on freelancer.com platform and have taken mobile application projects.",
    image: "/images/bde.png",
    emailSubject: "BDE/Online Bidder Application",
  },
  {
    id: 4,
    title: "Web Designer (1+ years of experience)",
    description: "Must have designed websites, knowledge of HTML, CSS, Bootstrap, JavaScript and ability to convert PSD to HTML.",
    image: "/images/web-designer.png",
    emailSubject: "Web Designer Application",
  },
  {
    id: 5,
    title: "SEO (Freshers)",
    description: "Good communication, knowledge of On-Page & Off-Page SEO.",
    image: "/images/seo.png",
    emailSubject: "SEO Freshers Application",
  },
  {
    id: 6,
    title: "Digital Marketing Executive",
    description: "Good communication, 1+ years of experience in SEO, SMM, PPC.",
    image: "/images/digital-marketing.png",
    emailSubject: "Digital Marketing Executive Application",
  },
];  

function CurrentOpening() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Current Opening</h1>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                  <div key={job.id} className="flex flex-col items-center p-5 border rounded-lg shadow-md bg-white">
                      <Image src={man} alt={job.title} width={80} height={80} className="rounded-md mb-4" />
                      <div className="text-center">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.description}</p>
                      </div>
                      {/* Apply Now Button with mailto link */}
                      <a 
                        href={`mailto:yamyasolutions@gmail.com?subject=${encodeURIComponent(job.emailSubject)}&body=I am interested in the ${job.title} position. My qualifications: [Your qualifications here].`} 
                        className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
                      >
                        Apply Now
                      </a>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}

export default CurrentOpening;
=======
"use client;";
import Image from 'next/image';
import React from 'react';
import man from '../img/working-man.png';

const jobs = [
  {
    id: 1,
    title: "Software Developer (Fresher)",
    description: "Good communication required with good knowledge of C, C++, and OOPs concepts or Core Java, advance Java.",
    image: "/images/software-dev.png", // Replace with actual path
    emailSubject: "Software Developer Application",
  },
  {
    id: 2,
    title: "Fresher React-Native Developer",
    description: "Knowledge of UI/UX design and other common Android/iOS libraries using React Native platform.",
    image: "/images/react-native.png",
    emailSubject: "React-Native Developer Application",
  },
  {
    id: 3,
    title: "BDE/Online Bidder (1+ years of experience)",
    description: "Excellent communication skills. Must have worked on freelancer.com platform and have taken mobile application projects.",
    image: "/images/bde.png",
    emailSubject: "BDE/Online Bidder Application",
  },
  {
    id: 4,
    title: "Web Designer (1+ years of experience)",
    description: "Must have designed websites, knowledge of HTML, CSS, Bootstrap, JavaScript and ability to convert PSD to HTML.",
    image: "/images/web-designer.png",
    emailSubject: "Web Designer Application",
  },
  {
    id: 5,
    title: "SEO (Freshers)",
    description: "Good communication, knowledge of On-Page & Off-Page SEO.",
    image: "/images/seo.png",
    emailSubject: "SEO Freshers Application",
  },
  {
    id: 6,
    title: "Digital Marketing Executive",
    description: "Good communication, 1+ years of experience in SEO, SMM, PPC.",
    image: "/images/digital-marketing.png",
    emailSubject: "Digital Marketing Executive Application",
  },
];  

function CurrentOpening() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Current Opening</h1>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                  <div key={job.id} className="flex flex-col items-center p-5 border rounded-lg shadow-md bg-white">
                      <Image src={man} alt={job.title} width={80} height={80} className="rounded-md mb-4" />
                      <div className="text-center">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.description}</p>
                      </div>
                      {/* Apply Now Button with mailto link */}
                      <a 
                        href={`mailto:yamyasolutions@gmail.com?subject=${encodeURIComponent(job.emailSubject)}&body=I am interested in the ${job.title} position. My qualifications: [Your qualifications here].`} 
                        className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
                      >
                        Apply Now
                      </a>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}

export default CurrentOpening;
>>>>>>> 0463540 (first commit)
