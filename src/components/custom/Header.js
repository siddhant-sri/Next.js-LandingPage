import Image from "next/image";
import React from "react";
import companyLogo from "../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="bg-white shadow-md rounded-lg fixed w-full z-50">
      <div className="mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Image src={companyLogo} alt="Company Logo" className="h-14" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-800 hover:text-blue-500">
              Services
            </a>
            <a href="#media" className="text-gray-800 hover:text-blue-500">
              Media
            </a>
            <a href="#case" className="text-gray-800 hover:text-blue-500">
              Cases
            </a>
            <a href="#faq" className="text-gray-800 hover:text-blue-500">
              FAQ
            </a>
            <a
              href="#projectDiscuss"
              className="text-gray-800 hover:text-blue-500"
            >
              Contacts
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+910000000000"
              className="text-[#80a948] flex items-center"
            >
              <FontAwesomeIcon
                className="h-[20px] mr-1"
                icon={faMobileScreen}
              />
              +91 000000000
            </a>
            <a
              href="mailto:demo@gmail.com"
              className="text-[#80a948] flex items-center"
            >
              <FontAwesomeIcon className="h-[20px] mr-1" icon={faEnvelope} />
              demo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
