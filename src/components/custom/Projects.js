import React from "react";
import { industries } from "@/lib/constants";
import Image from "next/image";
import ind1 from "../../assets/socialmedia.png";
import { projects } from "@/lib/constants";
import style from "../../lib/style.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import project from "../../assets/project.png";
import location from "../../assets/location.png";
import realEstate from "../../assets/realEstate.png";
import google from "../../assets/googleplay.png";
import apple from "../../assets/applelogo.png";

const Projects = () => {
  return (
    <>
      <section id="projects" className="container mb-10">
        <div>
          <div className="mt-10 md:mt-[7%] w-full md:w-[40%]">
            <h1 className="font-bold text-2xl md:text-4xl">
              Developed more than <span className="text-green-500">100</span>{" "}
              projects in <span className="text-green-500">15</span> industries.
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {industries.map((ind, index) => (
              <div key={index} className="flex my-4 items-center">
                <span className="mx-2 bg-white rounded-full p-2 shadow-xl">
                  <Image
                    className=""
                    width={25}
                    height={50}
                    src={ind1}
                    alt="ind1"
                  />
                </span>
                <span className="font-bold">{ind.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-[7%] w-full md:w-[40%]">
            <h1 className="font-bold text-2xl md:text-4xl">
              Projects we are proud of
            </h1>
            <div className="my-7">
              <p className={style.project}>
                Our software development company is truly proud of the wonderful
                clients we have worked with. We enjoy a long-term partnership
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Tabs
                defaultValue="Project 1"
                className="relative mr-auto w-full"
              >
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                  {projects.map((item, index) => (
                    <div key={index}>
                      <TabsTrigger
                        value={item.title}
                        className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none "
                      >
                        {item.title}
                      </TabsTrigger>
                    </div>
                  ))}
                </TabsList>
                {projects.map((item, index) => (
                  <div key={index}>
                    <TabsContent value={item.title}>
                      <div className="my-10 md:my-[7%] text-2xl md:text-4xl font-bold">
                        {item.title}
                      </div>
                      <p className="text-sm md:text-base">{item.description}</p>
                    </TabsContent>
                  </div>
                ))}
              </Tabs>

              <div className="mt-10 md:mt-[7%]">
                <div className="text-slate-600 font-medium">
                  Business Analysis / iOS / Android / QA / UI/UX Design
                </div>
                <div className="flex flex-col sm:flex-row mt-10 md:mt-[7%]">
                  <div className="mr-10 flex items-center mb-4 sm:mb-0">
                    <span className="mr-2">
                      <Image
                        width={25}
                        height={50}
                        src={location}
                        alt="location"
                      />
                    </span>
                    India
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">
                      <Image
                        width={25}
                        height={50}
                        src={realEstate}
                        alt="realEstate"
                      />
                    </span>
                    Real Estate
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row mt-10 md:mt-[7%] font-bold text-xl md:text-3xl justify-start">
                  <div className="mr-10 flex flex-col mb-4 sm:mb-0">
                    400%
                    <div className="text-sm text-slate-400 mt-3 font-medium">
                      User Growth
                    </div>
                  </div>
                  <div className="flex flex-col">
                    + 200 000
                    <div className="text-sm text-slate-400 mt-3 font-medium">
                      Active Users
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row mt-10 md:mt-[7%]">
                  <div className="mb-4 sm:mb-0">
                    <Image
                      className="w-[148px] h-[40px]"
                      src={apple}
                      alt="apple"
                    />
                  </div>
                  <div className="sm:ml-4">
                    <Image
                      className="w-[136px] h-[40px]"
                      src={google}
                      alt="google"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-0 md:ml-8">
              <Image src={project} alt="project_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
