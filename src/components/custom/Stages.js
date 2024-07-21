import Image from "next/image";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import stage from "../../assets/stage.png";
import states from "../../assets/stages.png";

const Stages = () => {
  return (
    <section id="case" className="bg-white">
      <div className="container">
        <div className="pt-16">
          <h1 className="font-bold text-2xl md:text-4xl mb-8">
            Application Development Stages
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-1/3">
            <div className="shadow-xl mb-5 lg:mb-0">
              <Card>
                <CardHeader>
                  <CardTitle className="my-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image src={states} alt="states" />
                      </div>
                      <div>Analysis</div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    We craft precise technical specs, aligning with your
                    business, technology, and user requirements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="shadow-xl mb-5 lg:my-5">
              <Card>
                <CardHeader>
                  <CardTitle className="my-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image src={states} alt="states" />
                      </div>
                      <div>Design</div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Our designers create user-friendly interfaces and engaging
                    user experiences.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="shadow-xl mb-5 lg:mb-0">
              <Card>
                <CardHeader>
                  <CardTitle className="my-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image src={states} alt="states" />
                      </div>
                      <div>Development</div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Our developers build robust and scalable applications.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/3 mb-5 lg:mb-0">
            <Image height={900} src={stage} alt="stage" />
          </div>
          <div className="flex flex-col lg:w-1/3">
            <div className="shadow-xl mb-5 lg:mb-0">
              <Card>
                <CardHeader>
                  <CardTitle className="my-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image src={states} alt="states" />
                      </div>
                      <div>Testing</div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    We ensure the application is bug-free and meets your
                    requirements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="shadow-xl mb-5 lg:my-5">
              <Card>
                <CardHeader>
                  <CardTitle className="my-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image src={states} alt="states" />
                      </div>
                      <div>Deployment</div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    We deploy the application and ensure it runs smoothly.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="shadow-xl mb-5 lg:mb-0">
              <Card>
                <CardHeader>
                  <CardTitle className="my-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image src={states} alt="states" />
                      </div>
                      <div>Maintenance</div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    We provide ongoing support and maintenance for your
                    application.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stages;
