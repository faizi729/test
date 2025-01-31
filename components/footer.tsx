"use client";
import { Linkedin, Instagram } from "lucide-react";
import yamya from './img/yamya2.png';
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Footer() {
  const router = useRouter();
  return (
    <>
    <hr/>
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        {/* Center content on small screens, use grid for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div  onClick={() => {router.push("/")}} className="flex justify-center md:justify-start items-center">
              <Image src={yamya} width={100} height={200} alt="image not found" />
              {/* <span className="ml-2 text-lg font-bold">Yamya</span>  */}
            </div>
            <p className="mt-4 text-sm text-black">
              Transforming ideas into powerful digital solutions since 2024.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-black">
              <li className="cursor-pointer" onClick={() => {router.push("/WebService")}}>Web Development</li>
              <li className="cursor-pointer" onClick={() => {router.push("/MobileService")}}>Mobile Apps</li>
              <li className="cursor-pointer" onClick={() => {router.push("/IsoService")}}>Ios Development</li>
              <li className="cursor-pointer" onClick={() => {router.push("/HybridService")}}>Cross-Platform App Development</li>
             
            
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-black">
              <li className="cursor-pointer" onClick={() => {router.push("/About")}}>About Us</li>
              <li className="cursor-pointer" onClick={() => {router.push("/contactus")}}>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <a href="https://www.linkedin.com/in/yamyasoftwaresolutions">
                <Linkedin className="h-8 w-8 text-black" />
              </a>
              <a href="https://www.instagram.com/yamya_solutions?igsh=NmdkNGQ3OTJrYXFo">
                <Instagram className="h-7 w-7 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-black">
          <p>© 2025 Yamya. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}
