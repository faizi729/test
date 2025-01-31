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
  { src: poster, alt: "Team collaboration", description: "Description of Project 1" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60", alt: "Modern office space", description: "Description of Project 2" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60", alt: "Development team", description: "Description of Project 3" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60", alt: "Team meeting", description: "Description of Project 4" },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>

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
              <Card className="overflow-hidden group relative">
                <div className="relative h-64 aspect-w-4 aspect-h-3 transition-transform group-hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    className="object-cover"
                  />
                </div>

                {/* Hover Effect */}
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
