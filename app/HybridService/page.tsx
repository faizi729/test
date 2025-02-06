import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='pt-10'>
     <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 ">
        <h1 className="text-4xl font-bold mb-4 text-center">React Native App Development Company</h1>
        <p className="text-lg mb-8 text-center">
          We specialize in creating high-performance React Native apps, offering cross-platform solutions for businesses looking to expand their digital presence. Our expert developers ensure smooth performance, user-friendly UI/UX, and innovative features.
        </p>
     </div>
       
     <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://www.youngdecade.com/img/mobile_app03.webp"
              alt="React Native App Development"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Cross-Platform App Development
            </h2>
            <p className="mt-4 text-gray-600">
              With React Native, we develop apps that work seamlessly on both iOS and Android using a single codebase. This ensures cost-effective and faster deployment for your business.
            </p>
            <p className="mt-4 text-gray-600">
              Cross-platform development enables businesses to reach a broader audience with minimal effort. By leveraging a shared codebase, companies can maintain consistency across different platforms while reducing maintenance costs.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 my-12"></div>
        
        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image
              src="https://www.youngdecade.com/img/mobile_app04.webp"
              alt="App Maintenance & Support"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Ongoing Maintenance & Support
            </h2>
            <p className="mt-4 text-gray-600">
              We provide regular updates, bug fixes, and performance improvements to ensure your React Native apps run smoothly and efficiently.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Seamless Integration</h3>
              <p className="mt-4 text-sm text-gray-600">We integrate third-party APIs and backend services effortlessly for a complete mobile app solution.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page;
