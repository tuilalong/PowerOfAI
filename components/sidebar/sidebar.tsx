"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import React from "react";
import { Logo } from "../logo";
import SidebarToggle from "./sidebar-toggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "../ui/progress";

import SubcriptionBtn from "@/components/subcription-btn";
import ThemeToggle from "./theme-toggle";
import Navbar from "./navbar";

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
  const { user } = useUser();
  return (
    <div className={cn("text-white", classNames)}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {!isMinimal && <Logo />}
          <SidebarToggle />
        </div>
      </div>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        <Navbar />
      </div>
      <div
        className={cn(
          "fixed bottom-8 !left-4",
          "lg:left-7 lg:right-auto",
          isMinimal && "lg:left-3"
        )}
      >
        <div className="mb-4 p-4 rounded-lg bg-gray-900">
          <div className="mb-4 flex items-center">
            <UserButton afterSignOutUrl="/" />
            {!isMinimal && (
              <span className="text-sm ml-4">
                {user?.emailAddresses?.[0].emailAddress}
              </span>
            )}
          </div>
          {!isMinimal && (
            <div className="border-t border-t-950 pt-2">
              {!isProPlan && (
                <div className="mb-4">
                  <div className="text-center mb-2 text-muted-foreground font-semibold">
                    {userLimitCount}/{MAX_FREE_COUNT} Free generations
                  </div>
                  <Progress
                    value={
                      userLimitCount && (userLimitCount / MAX_FREE_COUNT) * 100
                    }
                    className="bg-gray-950 h-3"
                    indicaterclassname="gradient-btn"
                  />
                </div>
              )}
              <SubcriptionBtn isPro={isProPlan} />
            </div>
          )}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
