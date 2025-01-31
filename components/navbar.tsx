"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import yamya from "./img/yamya2.png";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isCareersHovered, setIsCareersHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCareersOpen, setIsMobileCareersOpen] = useState(false);

  const router = useRouter();

  let servicesTimeout: NodeJS.Timeout;
  let careersTimeout: NodeJS.Timeout;

  return (
    <nav className="bg-white  border-b fixed top-0 w-full z-50 p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flex items-center">
            <div onClick={() => router.push("/")}>
              <Image
                src={yamya}
                alt="Yamya Logo"
                width={150}
                height={150}
                className="w-auto h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push("/")}>
              Home
            </Button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(servicesTimeout);
                setIsServicesHovered(true);
              }}
              onMouseLeave={() => {
                servicesTimeout = setTimeout(() => setIsServicesHovered(false), 200);
              }}
            >
              <Button variant="ghost">Services</Button>
              {isServicesHovered && (
                <div className="absolute left-0 mt-7 bg-white shadow-lg border rounded-md w-80 z-50 p-2 transition-opacity duration-200">
                  {[
                    { path: "/MobileService", label: "Mobile App Design & Development" },
                    { path: "/IsoService", label: "Best iOS App Development" },
                    { path: "/AndroidService", label: "Android App Development" },
                    { path: "/HybridService", label: "Cross Platform Hybrid App Development" },
                    { path: "/WebService", label: "Web Development & Design" },
                    { path: "/NativeService", label: "React Native App Development" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left px-4 py-2 text-sm hover:bg-black hover:text-white transition duration-300"
                      onClick={() => router.push(item.path)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <Button variant="ghost" onClick={() => router.push("/About")}>
              About
            </Button>

            {/* Careers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(careersTimeout);
                setIsCareersHovered(true);
              }}
              onMouseLeave={() => {
                careersTimeout = setTimeout(() => setIsCareersHovered(false), 200);
              }}
            >
              <Button variant="ghost">Careers</Button>
              {isCareersHovered && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md w-48 z-50 transition-opacity duration-200">
                  {[
                    { path: "/internships", label: "Internships" },
                    { path: "/CurrentOpening", label: "Full-Time Jobs" },
                    { path: "/Careers", label: "Employee Benefits" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left px-4 py-2 text-sm hover:bg-black hover:text-white transition duration-300"
                      onClick={() => router.push(item.path)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <Button variant="ghost" onClick={() => router.push("/contactus")}>
              Contact
            </Button>

            <a href="tel:9407578673">
              <Button>
                <Phone className="mr-2" /> Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-white border-t">
          <div className="px-4 py-2 flex flex-col items-stretch space-y-2">
            <Button variant="ghost" className="w-full text-left" onClick={() => router.push("/")}>
              Home
            </Button>

            {/* Services Dropdown in Mobile Menu */}
            <div>
              <Button
                variant="ghost"
                className="w-full text-left"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services {isMobileServicesOpen ? "▲" : "▼"}
              </Button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  {[
                    { path: "/MobileService", label: "Mobile App Design & Development" },
                    { path: "/IsoService", label: "Best iOS App Development" },
                    { path: "/AndroidService", label: "Android App Development" },
                    { path: "/HybridService", label: "Cross Platform Hybrid App Development" },
                    { path: "/WebService", label: "Web Development & Design" },
                    { path: "/NativeService", label: "React Native App Development" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left"
                      onClick={() => {
                        router.push(item.path);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Careers Dropdown in Mobile Menu */}
            <div>
              <Button
                variant="ghost"
                className="w-full text-left"
                onClick={() => setIsMobileCareersOpen(!isMobileCareersOpen)}
              >
                Careers {isMobileCareersOpen ? "▲" : "▼"}
              </Button>
              {isMobileCareersOpen && (
                <div className="pl-4 space-y-1">
                  {[
                    { path: "/internships", label: "Internships" },
                    { path: "/CurrentOpening", label: "Full-Time Jobs" },
                    { path: "/Careers", label: "Employee Benefits" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left"
                      onClick={() => {
                        router.push(item.path);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <Button variant="ghost" className="w-full text-left" onClick={() => router.push("/contactus")}>
              Contact Us
            </Button>

            <Button variant="ghost" className="w-full text-left" onClick={() => router.push("/About")}>
              About
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
