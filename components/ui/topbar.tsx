"use client";
import { cn } from "@/lib/utiils";
import React, { useState } from "react";
import { Logo } from "./logo";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebar-store";

export const Topbar = () => {
  const { handleOpenOrClose } = useSidebarStore();
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30 lg:hidden"
      )}
    >
      <Logo />
      <Button variant="ghost" size="icon" onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  );
};
