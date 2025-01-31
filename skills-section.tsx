"use client";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import pr from './img/programing.png';
import { motion } from "framer-motion";

const categories = ['Frameworks', 'Database', 'Languages', 'CMS', 'Others'];
const skills = [
  {
    category: "Frameworks",
    technologies: [
      { name: "Node JS", image: pr ,color:"#43853D" },
      { name: "Flutter", image: "https://www.youngdecade.com/img/s_o-2.webp" ,color:"#02569B" },
      { name: "Android Studio", image: "https://www.youngdecade.com/img/s_o-1.webp" ,color:"#3DDC84" },
      { name: "Codeigniter", image: "https://www.youngdecade.com/img/s_f-3.webp" ,color:"#D17A3B" },
      { name: "Laravel", image: "https://www.youngdecade.com/img/s_f-4.webp" ,color:"#F4645F" },
      { name: "Dart", image: "https://www.youngdecade.com/img/s_o-3.webp" ,color:"#0175C2" },
      { name: "Xcode", image: "https://www.youngdecade.com/img/s_o-5.webp" ,color:"#1575F9" },
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", image: "https://www.youngdecade.com/img/s_d-3.webp" ,color:"#47A248" },
      { name: "MySQL", image: "https://www.youngdecade.com/img/s_d-2.webp" ,color:"#00758F" },
      { name: "SQLite", image: "https://www.youngdecade.com/img/s_d-1.webp" ,color:"#003B57" }
    ]
  },
  {
    category: "Languages",
    technologies: [
      { name: "HTML", image: "https://www.youngdecade.com/img/s_l-1.webp" ,color:"#FF8C00 " },
      { name: "CSS", image: "https://www.youngdecade.com/img/s_l-2.webp" ,color:"#57A0D3 " },
      { name: "Javascript", image: "https://www.youngdecade.com/img/s_l-3.webp" ,color:"#FFEB3B  " },
      { name: "Jquery", image: "https://www.youngdecade.com/img/s_l-4.webp" ,color:"#61A9D9 " },
      { name: "PHP", image: "https://www.youngdecade.com/img/s_l-5.webp" ,color:"#777BB4" },
      { name: "Swift", image: "https://www.youngdecade.com/img/s_l-6.webp" ,color:"#FF6F61 " },
      { name: "React Native", image: "https://www.youngdecade.com/img/s_l-7.webp" ,color:"#61DAFB" },
      { name: "Java", image: "https://www.youngdecade.com/img/s_l-8.webp" ,color:"#007396" },
    ]
  },
  {
    category: "CMS",
    technologies: [
      { name: "WordPress", image: "https://www.youngdecade.com/img/s_c-1.webp" ,color:"#21759B" },
      { name: "Drupal", image: "https://www.youngdecade.com/img/s_c-2.webp" ,color:"#4A8CC3" },
      { name: "Joomla", image: "https://www.youngdecade.com/img/s_c-3.webp" ,color:"#5091CD" },
      { name: "Magento", image: "https://www.youngdecade.com/img/s_c-4.webp" ,color:"#FF7F32 " },
      { name: "Opencart", image: "https://www.youngdecade.com/img/s_c-5.webp" ,color:"#1D82C3" },
      { name: "Shopify", image: "https://www.youngdecade.com/img/s_c-6.webp" ,color:"#96BF48" },
      { name: "PrestaShop", image: "https://www.youngdecade.com/img/s_c-7.webp" ,color:"#DF0067" },
    ]
  },
  {
    category: "Others",
    technologies: [
      { name: "React Js", image: "https://www.youngdecade.com/img/s_o-4.webp" ,color:"#61DAFB" },
      { name: "Symfony", image: "https://www.youngdecade.com/img/s_f-7.webp" ,color:"#000" },
      { name: "Yii", image: "https://www.youngdecade.com/img/s_f-5.webp" ,color:"#D85888" },
      { name: "Cake PHP", image: "https://www.youngdecade.com/img/s_f-6.webp" ,color:"#4A90E2 " },
      { name: "Azure", image: "https://www.youngdecade.com/img/s_f-1.webp" ,color:"#0078D4" }
    ]
  }
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Frameworks');
  const selectedSkill = skills.find(skill => skill.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 p-6 min-h-screen">
      
      {/* Category Selection */}
      <div className="w-full max-w-2xl text-center mb-6">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 border-b border-gray-300 pb-2">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 text-sm md:text-base font-medium 
                ${selectedCategory === category ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-700'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills List for Selected Category */}
      <div className="w-full max-w-6xl text-center">
        <p className="text-gray-600 text-lg font-medium mb-4">Key Technologies under <span className="font-bold text-blue-600">{selectedCategory}</span>:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
         
          {selectedSkill?.technologies.map((tech) => (
            <motion.div
            key={tech.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            className="group transition-all duration-150"
          >
            <Card className="shadow-md border p-3 cursor-pointer transition-all duration-300 group-hover:bg-opacity-80"
               style={{ transition: "background-color 0.3s" }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = tech.color;
                 
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = "white";
                 
               }}
            >
              <CardHeader className="flex flex-col items-center">
                <Image src={tech.image} width={60} height={60} alt={tech.name} className="mx-auto" />
                <CardTitle className="text-sm font-semibold text-center mt-2 text-black">{tech.name}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
