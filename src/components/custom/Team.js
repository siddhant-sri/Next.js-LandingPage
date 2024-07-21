import Image from "next/image";
import React from "react";
import team from "../../assets/team.png";

const Team = () => {
  return (
    <section className="bg-white">
      <div className="container mt-[7%] flex flex-col lg:flex-row pt-6">
        <div className="lg:w-1/2 p-4 lg:p-0">
          <h1 className="font-bold text-2xl md:text-4xl">Our Team</h1>
          <p className="mt-4 lg:mt-[5%] font-medium">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>

          <div className="mt-4 lg:mt-[7%]">
            <div className="flex flex-wrap mt-4 md:flex lg:mt-[7%] font-bold text-3xl lg:text-5xl justify-start">
              <div className="mr-6 lg:mr-10 flex flex-col">
                28
                <div className="text-sm text-slate-400 mt-2 lg:mt-3 font-medium">
                  team members
                </div>
              </div>
              <div className="mr-6 lg:mr-10 flex flex-col">
                +100
                <div className="text-sm text-slate-400 mt-2 lg:mt-3 font-medium">
                  projects
                </div>
              </div>
              <div className="flex flex-col mt-4 md:mt-0">
                7 years
                <div className="text-sm text-slate-400 mt-2 lg:mt-3 font-medium">
                  in IT sphere
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 lg:mt-[5%] font-medium">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It&apos;s
            expensive but worth it.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-12 mb-10 lg:mb-28 flex justify-center lg:w-1/2">
          <Image className="shadow-xl" src={team} alt="team" />
        </div>
      </div>
    </section>
  );
};

export default Team;
