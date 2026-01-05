"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import SidebarMobile from "./SidebarMobile";
import BreadcrumbMenu from "../BreadcrumbMenu";

export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={`min-h-screen container flex py-2`}>
      <div className={`${isHome ? "hidden" : "md:w-1/4"}`}>
        <Sidebar />
      </div>
      <div className={`${isHome ? "w-full" : "w-full md:w-3/4 pl-4"}`}>
        <BreadcrumbMenu />
        <SidebarMobile />
        {children}
      </div>
    </main>
  );
}
