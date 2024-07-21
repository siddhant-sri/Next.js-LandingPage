import React, { useState, useEffect } from "react";
import { accordionItems } from "../../lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordianGroup = ({ getSelected }) => {
  const [activeTab, setActiveTab] = useState("iOS Development");

  getSelected(activeTab);

  const handleOnClick = (tab) => {
    setActiveTab(tab);

    console.log("setActiveTab:" + activeTab);
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        {accordionItems.map((item, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            onClick={() => handleOnClick(item.title)}
          >
            <AccordionTrigger className="text-lg">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordianGroup;
