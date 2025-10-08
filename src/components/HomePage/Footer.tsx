import { MapPin } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
const schoolInfo = {
address: "Moreko Secondary School, R579, Phokwane, 1061",
    phone: "+27 (15) 491-3233",
    email: "administration@moreko.co.za",
    established: "1987",
    motto: "Hard Work Conquers All",
    principal: "Mrs. EM Mkhabele",
    instagram: (process.env.NEXT_PUBLIC_IG_URL ?? "").trim() || "#"
};
const igUrl = schoolInfo.instagram;
const hasIg = igUrl !== "#";

const InstagramIcon = ({ className = "w-4 h-4 mr-2 flex-shrink-0" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7z"/>
    <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.7 6.3a0.9 0.9 0 1 1-1.8 0 0.9 0.9 0 0 1 1.8 0z"/>
  </svg>
);
const Footer = () => {
  return (
    <footer className="bg-red-800 text-gray-100 py-12">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={"/images/logo.png"}
                width={50}
                height={50}
                alt="LOGO"
              />
              <div>
                <h3 className="text-xl font-bold">Moreko High School</h3>
                <p className="text-red-200">{schoolInfo.motto}</p>
              </div>
            </div>
            <p className="text-red-200">
              Committed to providing quality education and nurturing the leaders
              of tomorrow since {schoolInfo.established}.
            </p>
            <p className="flex items-center mt-4">
                <InstagramIcon />
                <a
                  href={igUrl}
                  target={hasIg ? "_blank" : undefined}
                  rel={hasIg ? "noopener noreferrer" : undefined}
                  className="hover:text-gray-100 text-red-200"
                  aria-label="Moreko Instagram"
                >
                  Instagram
                </a>
              </p>
              
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-red-200">

              <li>
                <a href="#achievements" className="hover:text-gray-100">
                  Our Achievements
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-100">
                  About Us
                </a>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-red-200 hover:text-gray-100 p-0 h-auto cursor-pointer"
                >
                  <a href={process.env.NEXT_PUBLIC_ADMIN_URL}>Admin Portal</a>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="text-red-200 space-y-2">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                {schoolInfo.address}
              </p>
              <p>Phone: {schoolInfo.phone}</p>
              <p>Email: {schoolInfo.email}</p>
              <p>Principal: {schoolInfo.principal}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 text-center text-red-200">
          <p>&copy; 2024 Moreko High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
