import React from "react";
import logo from '../components/img/yamya1.png'
import Image from "next/image";


const brands = [
  { name: "VERTEX", logo: "/logos/vertex.png" },
  { name: "martino", logo: "/logos/martino.png" },
  { name: "SquareStone", logo: "/logos/squarestone.png" },
  { name: "waverio", logo: "/logos/waverio.png" },
  { name: "fireli", logo: "/logos/fireli.png" },
  { name: "Virogan", logo: "/logos/virogan.png" },
  { name: "aromix", logo: "/logos/aromix.png" },
  { name: "Natroma", logo: "/logos/natroma.png" },
];

const BrandSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900">
            Customers and brands love using <span className="text-black">Rareblocks</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, 
            proin faucibus nibh et sagittis.
          </p>
        </div>

        {/* Right Section (Brand Logos) */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex items-center justify-center"
              style={{
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)", // Softer, more contained shadow
                border: "1px solid rgba(0, 0, 0, 0.05)", // Subtle border for definition
              }}
            >
              <Image src={logo} alt={brand.name} className="h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
