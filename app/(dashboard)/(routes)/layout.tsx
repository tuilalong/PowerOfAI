"use client";

import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import UpgradeProModal from "@/components/dashboard/upgrade-pro-sidebar";
import Sidebar from "@/components/sidebar/sidebar";
import { Topbar } from "@/components/topbar";
import { cn } from "@/lib/utils";
import React from "react";
import { useTheme } from "next-themes";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const userLimitCount = 0;
  const isProPlan = false;
  const { theme } = useTheme();

  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main
        className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
        )}
      >
        <Sidebar
          userLimitCount={userLimitCount}
          isProPlan={isProPlan}
          classNames={cn(
            "fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal])]:w-fit lg:block"
          )}
        />
        {/* <MobileSidebar isProPlan={isProPlan} userLimitCount={0} />
        <UpgradeProModal isProPlan={isProPlan} /> */}
        <div
          className={cn(
            "h-[calc(100vh-56px)] lg:rounded-3xl lg:p-7",
            theme === "light" ? "bg-white" : "bg-black"
          )}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
