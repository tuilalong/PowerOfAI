import React from "react";
import { BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

type LogoProps = {
  classNames?: string;
};

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export const Logo: React.FC<LogoProps> = ({ classNames }) => {
  return (
    <div className={cn("flex items-center", classNames)}>
      <BrainCircuit color="#0ea5e9" size={40} />
      <span className={cn("ml-2 font-bold text-3xl", poppins.className)}>
        Brainfast
      </span>
    </div>
  );
};
