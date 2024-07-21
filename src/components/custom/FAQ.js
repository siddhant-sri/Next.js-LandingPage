"use client";
import React, { useState } from "react";
import style from "../../lib/style.css";

const FAQ = () => {
  const list = [
    {
      header: "What is the cost of mobile application?",
      description:
        "The cost of a mobile application can vary widely depending on the complexity, features, platform, and the development team's rates. Typically, it ranges from a few thousand to several hundred thousand dollars.",
      state: false,
    },
    {
      header: "How long does it take to develop a mobile app?",
      description:
        "The development time for a mobile app depends on the app's complexity and features. A simple app can take around 2-3 months, whereas a more complex app with advanced features can take 6-12 months or longer.",
      state: false,
    },
    {
      header: "What platforms should the app support?",
      description:
        "The decision on which platforms to support (iOS, Android, or both) depends on your target audience and budget. Developing for both platforms ensures a wider reach but increases development time and cost.",
      state: false,
    },
    {
      header: "What is the process for developing a mobile app?",
      description:
        "The process typically involves several stages: idea and strategy, design and prototyping, development, testing, deployment, and maintenance. Each stage is crucial for the successful development of the app.",
      state: false,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white mb-10">
      <div className="container">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl py-12">FAQ</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pb-14">
          {list.map((item, index) => (
            <div
              key={index}
              id={`accordion-collapse-${index}`}
              data-accordion="collapse"
            >
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-black border border-gray-70 rounded-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleClick(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span>{item.header}</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${
                      activeIndex === index ? "rotate-180" : ""
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {activeIndex === index ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    )}
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`${activeIndex === index ? "" : "hidden"}`}
                aria-labelledby={`accordion-collapse-heading-${index}`}
              >
                <div className="p-5 border border-gray-200">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
