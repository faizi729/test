import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='pt-11'>
     <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 ">
    <h1 className="text-4xl font-bold mb-4 text-center">Mobile App Development Services</h1>
    <p className="text-lg mb-8 text-center">
    We provide end-to-end mobile app development solutions, ensuring seamless performance, user-friendly design, and innovative features tailored to your business needs.
    </p>
    </div>
       <div className="max-w-6xl mx-auto px-6 py-12">
                  {/* Section 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <Image
                        src="https://www.youngdecade.com/img/mobile_app03.webp"
                        alt="Mobile App Development"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Custom Mobile App Development
                      </h2>
                      <p className="mt-4 text-gray-600">
                        We create custom mobile apps for iOS and Android that align with your business goals. Our team specializes in UI/UX design, app architecture, and performance optimization to deliver top-notch experiences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-300 my-12"></div>
                  
                  {/* Section 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2">
                      <Image
                        src="https://www.youngdecade.com/img/mobile_app04.webp"
                        alt="App Maintenance"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        App Maintenance & Support
                      </h2>
                      <p className="mt-4 text-gray-600">
                        We offer ongoing support and maintenance for your mobile apps to ensure smooth performance, security updates, and feature enhancements that keep your users engaged.
                      </p>
                    </div>
                  </div>
                </div>

            {/* Features Section */}
            <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                    <svg className="text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Secure & Scalable Solutions</h3>
                <p className="mt-4 text-sm text-gray-600">We prioritize security and scalability to ensure your mobile apps grow with your business while keeping data safe.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                    <svg className="text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">High Performance & Speed</h3>
                <p className="mt-4 text-sm text-gray-600">Our apps are optimized for performance and load time, ensuring a seamless user experience.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                    <svg className="text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">User-Centric Design</h3>
                <p className="mt-4 text-sm text-gray-600">We focus on creating intuitive and engaging UI/UX designs to enhance user retention.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                    <svg className="text-red-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Cross-Platform Development</h3>
                <p className="mt-4 text-sm text-gray-600">We develop apps that work seamlessly across multiple platforms using the latest frameworks.</p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default page;
