"use client";
import { cn } from "@/lib/utiils";
import { useSidebarStore } from "@/stores/sidebar-store";
import React from "react";
import { Logo } from "../logo";
import SidebarToggle from "./sidebar-toggle";

interface SidebarProps {
  classNames?: string;
  isProPlan?: boolean;
  userLimitCount?: number;
}
const Sidebar: React.FC<SidebarProps> = ({
  classNames,
  isProPlan,
  userLimitCount,
}) => {
  const { isMinimal } = useSidebarStore();
  return (
    <div className={cn("text-white", classNames)}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {!isMinimal && <Logo />}
          <SidebarToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
