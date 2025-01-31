"use client"
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';

const careers = [
    {
        title: 'Software Engineer',
        description: 'We are looking for a skilled software engineer to join our team.',
        location: 'San Francisco, CA',
    },
    {
        title: 'Product Manager',
        description: 'Join our team as a product manager to help us build amazing products.',
        location: 'New York, NY',
    },
    {
        title: 'UX Designer',
        description: 'We need a creative UX designer to improve our user experience.',
        location: 'Remote',
    },
];

const CareersPage: React.FC = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10">
    <h1 className="text-4xl font-bold mb-4">Employee Benefits</h1>
    <p className="text-lg mb-8">
    We believe that our success is driven by our talented and dedicated team. That's why we are committed to offering a comprehensive and rewarding benefits package designed to support your well-being, professional growth, and overall job satisfaction.
    </p>
    </div>
           
            <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/images/human-resources.jpg"
            alt="Human Resources"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Competitive Salaries and Performance Bonuses
          </h2>
          <p className="mt-4 text-gray-600">
            We offer competitive salaries that reflect your skills, experience,
            and contributions. In addition to base compensation, our performance
            bonus program rewards exceptional work and achievements. Annually,
            over 75% of our employees receive performance bonuses, with an
            average bonus increase of 15% year over year. This structure ensures
            that your hard work is recognized and rewarded.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 my-12"></div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <Image
            src="/images/professional-development.jpg"
            alt="Professional Development"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Professional Development and Growth Opportunities
          </h2>
          <p className="mt-4 text-gray-600">
            We prioritize internal promotions and career development, with 40%
            of managerial positions filled by internal candidates. We are
            committed to providing robust professional development opportunities
            to help you enhance your skills, expand your knowledge, and advance
            your career. We understand that a motivated and well-trained team is
            crucial for driving innovation and achieving exceptional results.
          </p>
        </div>
      </div>
    </div>
    
           
        </div>
    );
};

export default CareersPage;