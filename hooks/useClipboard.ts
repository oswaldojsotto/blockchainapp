import { toast } from "@/lib/use-toast";

export function copyToClipboard(hexValue: string) {
    const tempInput = document.createElement("input");
    tempInput.value = hexValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    toast({
        variant: "success",
        description: "Copied to clipboard ✅",
      });
   
}