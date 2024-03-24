import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

const InfoTooltip = ({ content, link = false }: InfoTooltip) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className={link ? "cursor-pointer" : "cursor-help"}>
            <Image
              src={`/icons/info.svg`}
              alt="details"
              width={15}
              height={15}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default InfoTooltip;
