"use client";
import React from "react";
import Image from "next/image";
import img from "../../assets/pic1.png";
import img2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <>
      <section id="services" className="bg-gray">
        <div className="container grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 pt-32 h-[110vh] overflow-hidden">
          <div className="">
            <h1 className="text-2xl md:text-4xl">
              <span className="font-bold text-yellow-400">
                User-Centric Excellence
              </span>
              <span className="font-medium">
                : Our{" "}
                <span className="font-bold">App Development services</span>{" "}
                Tackles Your Pain Points
              </span>
            </h1>
            <div className="my-5">
              <p className="font-medium text-sm md:text-base">
                Experience a Seamless Digital Journey with
                <span className="text-green-600 font-bold"> Desun</span> - Where
                Every Line of Code Resolves Your Challenges and
                <span className="text-yellow-400 font-bold">
                  {" "}
                  Elevates Your App Experience{" "}
                </span>
                to Unparalleled Heights.
              </p>
            </div>

            <div className="mt-10 md:mt-[10%] md:mb-10">
              <Card>
                <form>
                  <CardHeader>
                    <CardTitle>
                      <div className="w-full md:w-5/6">
                        <h1 className="">
                          Leave your contacts and we will call you back within
                          30 minutes
                        </h1>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col md:flex-row p-6">
                    <div className="flex flex-col p-4">
                      <label htmlFor="full-name">
                        <span className="text-red-600">*</span> Full name
                      </label>
                      <input
                        className="mb-4 outline-none border-gray-200 border-b-2"
                        type="text"
                        required
                        placeholder="   Enter Name"
                        onChange={(e) => e.target.value}
                      />
                      <label htmlFor="biz-name">
                        <span className="text-red-600">*</span> Business name
                      </label>
                      <input
                        type="text"
                        placeholder="   Enter Business Name"
                        required
                        className="outline-none border-gray-200 border-b-2"
                        onChange={(e) => e.target.value}
                      />
                    </div>
                    <div className="flex flex-col p-4">
                      <label htmlFor="phone">
                        <span className="text-red-600">*</span> Phone number
                      </label>
                      <input
                        className="mb-4 outline-none border-gray-200 border-b-2"
                        type="number"
                        required
                        placeholder="   Enter Number"
                        onChange={(e) => e.target.value}
                      />
                      <label htmlFor="biz-name">
                        <span className="text-red-600">*</span> Business mail
                      </label>
                      <input
                        type="email"
                        required
                        className="outline-none border-gray-200 border-b-2"
                        placeholder="   Enter mail"
                        onChange={(e) => e.target.value}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mb-5">
                    <Button
                      type="submit"
                      className="text-white bg-[#80A948] hover:bg-[#80A948]/90 focus:ring-4 focus:outline-none focus:ring-[#80A948]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#80A948]/50 me-2 mb-2 p-6"
                    >
                      Get
                      <br /> consultation
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
          <div className="mt-8 md:mt-0 hidden md:block overflow-hidden">
            <div className="grid grid-cols-2 gap-2 -rotate-12 md:ml-40">
              <div>
                <Image src={img} alt="img" />
              </div>
              <div>
                <Image src={img2} alt="img2" />
              </div>
              <div>
                <Image src={pic3} alt="pic3" />
              </div>
              <div>
                <Image src={pic4} alt="pic4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
