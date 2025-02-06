import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import  {Pagination}  from 'swiper';  // Correct import
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const clients = [
  { name: "Client 1", logo: "https://via.placeholder.com/150" },
  { name: "Client 2", logo: "https://via.placeholder.com/150" },
  { name: "Client 3", logo: "https://via.placeholder.com/150" },
  { name: "Client 4", logo: "https://via.placeholder.com/150" },
];

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, XYZ Ltd.",
    text: "Yamya Soln helped us scale our e-commerce platform seamlessly. Highly recommended!",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Jane Smith",
    position: "Founder, ABC Tech",
    text: "The team at Yamya Soln delivered exactly what we needed—top-notch mobile development solutions!",
    image: "https://via.placeholder.com/80",
  },
];

const ClientSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Trusted by Businesses Worldwide</h2>
        <p className="text-lg text-gray-400 mb-12">
          We deliver top-notch web and mobile solutions for businesses of all sizes.
        </p>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-12">
          {clients.map((client, index) => (
            <div key={index} className="p-4">
              <Image src={client.logo} alt={client.name} width={150} height={50} className="mx-auto grayscale hover:grayscale-0 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full md:w-2/3 mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-gray-800 p-6 text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-lg italic">“{testimonial.text}”</p>
                <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action */}
        <div className="mt-12">
          <Button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl">
            Work With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
