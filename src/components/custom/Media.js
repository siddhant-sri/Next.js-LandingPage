"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logobar.png";
import AccordianGroup from "./AccordianGroup";
import { accordionItems } from "../../lib/constants";

const Media = () => {
  const [tab, setTab] = useState("iOS Development");

  const getSelected = (data) => {
    setTab(data);
  };

  return (
    <section id="media" className="bg-white pt-8">
      <div className="container">
        <div>
          <div className="pt-10 px-4">
            <div className="md:flex md:justify-between p-7 border-gray border-y-2">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-full md:w-1/2 mb-4 sm:mb-0">
                  <Image src={logo} alt="logobar" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-white md:mt-2">
          <div className="p-0 md:mx-2">
            <h1 className="text-2xl md:text-4xl font-bold mt-4">
              Full Development Cycle
            </h1>
            <p className="mt-6 text-sm font-bold">Web use proven technology</p>
            <div className="mt-8">
              <h1 className="font-bold text-lg md:text-xl">{tab}</h1>
              <p className="mt-6 text-sm md:text-md">
                {accordionItems.find((item) => item.title === tab)?.content}
              </p>
            </div>

            <div className="mt-8">
              <h1 className="font-bold text-lg md:text-xl">{tab}</h1>
              <p className="mt-6 text-sm md:text-md">
                {accordionItems.find((item) => item.title === tab)?.content}
              </p>
            </div>
          </div>
          <div className="p-8 ">
            <AccordianGroup getSelected={getSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
