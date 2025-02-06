<<<<<<< HEAD
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='pt-11'>
      <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 ">
        <h1 className="text-4xl font-bold mb-4 text-center">Web Development and Design Company</h1>
        <p className="text-lg mb-8 text-center">
          We specialize in crafting modern, responsive, and scalable web solutions tailored to meet your business needs. Our team ensures high-quality design, seamless functionality, and optimal performance.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://www.youngdecade.com/img/web_development01.webp"
              alt="Custom Web Development"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Custom Web Development</h2>
            <p className="mt-4 text-gray-600">
              We build customized websites that align with your business objectives, incorporating modern technologies, responsive designs, and seamless user experiences.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 my-12"></div>
        
        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image
              src="https://www.youngdecade.com/img/web_design01.webp"
              alt="UI/UX Design"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">UI/UX Design & Optimization</h2>
            <p className="mt-4 text-gray-600">
              We create user-friendly and visually appealing web interfaces that enhance user engagement and improve conversions through modern UI/UX principles.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">Responsive & Mobile-Friendly</h3>
              <p className="mt-4 text-sm text-gray-600">Our websites are fully responsive and optimized for all devices to provide a seamless experience.</p>
            </div>

            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">SEO & Performance Optimization</h3>
              <p className="mt-4 text-sm text-gray-600">We optimize websites for speed, performance, and SEO to enhance visibility and user experience.</p>
            </div>

            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">Secure & Scalable Solutions</h3>
              <p className="mt-4 text-sm text-gray-600">We ensure your web applications are secure, scalable, and built with industry best practices.</p>
            </div>

            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">E-commerce & CMS Development</h3>
              <p className="mt-4 text-sm text-gray-600">We develop e-commerce platforms and CMS-based websites to help businesses grow online.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page;
=======
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='pt-11'>
      <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 ">
        <h1 className="text-4xl font-bold mb-4 text-center">Web Development and Design Company</h1>
        <p className="text-lg mb-8 text-center">
          We specialize in crafting modern, responsive, and scalable web solutions tailored to meet your business needs. Our team ensures high-quality design, seamless functionality, and optimal performance.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://www.youngdecade.com/img/web_development01.webp"
              alt="Custom Web Development"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Custom Web Development</h2>
            <p className="mt-4 text-gray-600">
              We build customized websites that align with your business objectives, incorporating modern technologies, responsive designs, and seamless user experiences.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 my-12"></div>
        
        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image
              src="https://www.youngdecade.com/img/web_design01.webp"
              alt="UI/UX Design"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">UI/UX Design & Optimization</h2>
            <p className="mt-4 text-gray-600">
              We create user-friendly and visually appealing web interfaces that enhance user engagement and improve conversions through modern UI/UX principles.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">Responsive & Mobile-Friendly</h3>
              <p className="mt-4 text-sm text-gray-600">Our websites are fully responsive and optimized for all devices to provide a seamless experience.</p>
            </div>

            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">SEO & Performance Optimization</h3>
              <p className="mt-4 text-sm text-gray-600">We optimize websites for speed, performance, and SEO to enhance visibility and user experience.</p>
            </div>

            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">Secure & Scalable Solutions</h3>
              <p className="mt-4 text-sm text-gray-600">We ensure your web applications are secure, scalable, and built with industry best practices.</p>
            </div>

            <div>
              <h3 className="mt-8 text-lg font-semibold text-black">E-commerce & CMS Development</h3>
              <p className="mt-4 text-sm text-gray-600">We develop e-commerce platforms and CMS-based websites to help businesses grow online.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page;
>>>>>>> 0463540 (first commit)
