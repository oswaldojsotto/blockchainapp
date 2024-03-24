import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface CollapsibleProps {
  title: string;
  description: string;
}

const Collapsible = ({ title, description }: CollapsibleProps) => {
  return (
    <div className="flex justify-center w-full outline-none">
      <div className="p-2 my-8 border rounded-md border-neutral-200 w-full min-w-4xl max-w-4xl">
        <Accordion type="single" collapsible>
          <AccordionItem className="text-neutral-600" value="item-1">
            <AccordionTrigger className="text-md">{title}</AccordionTrigger>
            <AccordionContent className="text-sm ">
              {description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Collapsible;
