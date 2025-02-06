    "use client";
    import Image from 'next/image';
    import React from 'react';

    const services = [
        {
            title: 'Android Development',
            description: 'Building high-quality Android applications.',
            imageUrl: '/images/android-development.jpg',
        },
        {
            title: 'Web Development',
            description: 'Creating responsive and modern web applications.',
            imageUrl: '/images/web-development.jpg',
        },
        {
            title: 'Cloud Computing',
            description: 'Providing scalable cloud solutions.',
            imageUrl: '/images/cloud-computing.jpg',
        },
        {
            title: 'AI & ML Work',
            description: 'Implementing AI and ML solutions.',
            imageUrl: '/images/ai-ml.jpg',
        },
    ];

    const page = () => {
        return (
            <div className='pt-11'>
    <div className="container text-center">
    <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 rounded-lg">
    <h1 className="text-4xl font-bold mb-4">Android App Development</h1>
    <p className="text-lg mb-8">
        At our company, a team of devoted and skilled developers blends their skills.
    </p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
    </button>
    </div>


        <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4">The Leading Android App Development Company In India</h2>
            <p className="text-lg mb-8">When it comes to top leading Android app development companies in India, Elicit definitely stands out. As a company that specializes in providing high-quality Android app development services, Elicit has built up an impressive reputation for delivering robust and scalable applications that meet the needs of both startups and large enterprises.</p>
            
        </div>

       
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
            <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                    <svg className="text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p className="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                    <svg className="text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
                <p className="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                    <svg className="text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                <p className="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                    <svg className="text-red-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
                <p className="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </div>
</section>
            </div>
        );
    };

    export default page;