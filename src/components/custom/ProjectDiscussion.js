"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectDiscussion = () => {
  return (
    <section
      id="projectDiscuss"
      className="py-10"
      style={{ background: "linear-gradient(90deg, #FABC1F 0%, #7CA546 100%" }}
    >
      <div className="container flex flex-col md:flex-row pb-10">
        <div className="w-full md:w-1/2 mt-10 md:mt-[5%]">
          <h1 className="font-bold text-2xl md:text-4xl text-white">
            Let&apos;s Discuss <br />
            Your Project
          </h1>
          <p className="text-white w-full md:w-3/4 my-4">
            Let&apos;s figure out how to create an effective application, its
            cost and terms of its development
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-[5%]">
          <div className="w-full md:w-5/6 shadow-xl">
            <Card>
              <div className="flex flex-col md:flex-row p-6">
                <div className="flex flex-col p-4">
                  <label htmlFor="full-name">Full name</label>
                  <input
                    className="mb-4 outline-none border-gray-200 border-b-2"
                    type="text"
                    required
                    placeholder="Enter Name"
                    onChange={(e) => e.target.value}
                  />
                  <label htmlFor="biz-name">Business name</label>
                  <input
                    type="text"
                    placeholder="Enter Business Name"
                    required
                    className="outline-none border-gray-200 border-b-2"
                    onChange={(e) => e.target.value}
                  />
                </div>
                <div className="flex flex-col p-4">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    className="mb-4 outline-none border-gray-200 border-b-2"
                    type="number"
                    required
                    placeholder="Enter Number"
                    onChange={(e) => e.target.value}
                  />
                  <label htmlFor="biz-mail">Business mail</label>
                  <input
                    type="email"
                    required
                    className="outline-none border-gray-200 border-b-2"
                    placeholder="Enter mail"
                    onChange={(e) => e.target.value}
                  />
                </div>
              </div>
              <div className="flex container justify-end mb-5">
                <Button
                  className="text-white bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                  type="submit"
                >
                  Discuss the project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDiscussion;
