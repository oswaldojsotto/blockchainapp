import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

interface CollapsibleProps {
  title: string;
  brief?: string;
  description: string;
}

const Collapsible = ({ title, description, brief }: CollapsibleProps) => {
  return (
    <div className="p-2 my-8 border rounded-md border-neutral-200">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <div className=" text-neutral-600 text-left text-[20px] -mb-4 font-semibold">
              {title}
            </div>
          </AccordionHeader>
          <AccordionTrigger className="flex justify-start gap-1 text-[13px] text-neutral-600">
            <span className="font-normal text-neutral-600">
              {brief}{" "}
              <span className="text-neutral-600 text-[13px] hover:font-semibold">
                {" "}
                Show more...
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 text-[13px]">
            {description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Collapsible;
