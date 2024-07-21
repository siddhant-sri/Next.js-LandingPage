import Image from "next/image";
import React from "react";
import footerlogo from "../../assets/footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="mb-8">
      <div className="container mt-10 bg-black rounded-xl py-8 px-6">
        <div className="flex justify-center mb-8">
          <Image height={300} width={300} src={footerlogo} alt="footerlogo" />
        </div>

        <div className="flex flex-col items-center md:flex-row text-gray-400 justify-between mb-8">
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="flex font-medium">
              <FontAwesomeIcon
                className="h-[20px] mr-1"
                icon={faMobileScreen}
              />
              Contact Nums
            </div>
            <div className="text-white">+91 0000000000</div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="flex font-medium">
              <FontAwesomeIcon className="h-[20px] mr-1" icon={faEnvelope} />
              Gmail
            </div>
            <div className="text-white">demo@gmail.com</div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="flex font-medium">
              <FontAwesomeIcon className="h-[20px] mr-1" icon={faLocationDot} />
              Address
            </div>
            <div className="text-white">Mumbai, India</div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="flex font-medium">
              <FontAwesomeIcon className="h-[20px] mr-1" icon={faFile} />
              Leave a request
            </div>
            <div className="text-white">Leave a request</div>
          </div>
        </div>

        <div className="text-center text-white py-4">
          We work throughout the world
        </div>
      </div>
    </section>
  );
};

export default Footer;
