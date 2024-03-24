import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const Collapsible = ({ title, description }: CollapsibleProps) => {
  return (
    <div className="p-2 my-8 border rounded-md border-neutral-200">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[14px] sm:text-[16px]">
            {title}
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Collapsible;
