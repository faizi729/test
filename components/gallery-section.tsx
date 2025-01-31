"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import poster from "../app/img/poster.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
  {
    src: poster,
    alt: "Team collaboration",
    description: "Collaboration between the team to develop innovative solutions.",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
    alt: "Modern office space",
    description: "A modern office environment fostering creativity and teamwork.",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
    alt: "Development team",
    description: "Our development team working on groundbreaking projects.",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    alt: "Team meeting",
    description: "A strategic team meeting for effective project execution.",
  },
  {
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop&q=60",
    alt: "Code review",
    description: "Code reviews ensure quality and efficiency in software development.",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    alt: "Mobile development",
    description: "Working on mobile solutions for a seamless user experience.",
  },
];

export function GallerySection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Company Blog</h2>
        
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Card className="overflow-hidden relative group">
                <div className="relative h-64 aspect-w-4 aspect-h-3 transition-transform group-hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Hover Description */}
                <div className="absolute inset-0 bg-black bg-opacity-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 className="text-xl font-semibold text-white">{image.alt}</h3>
                  <p className="text-sm text-white">{image.description}</p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
