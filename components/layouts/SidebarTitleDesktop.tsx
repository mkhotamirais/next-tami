"use client";

import useSidebarMenu from "@/hooks/useSidebarMenu";

export default function SidebarTitleDesktop() {
  const { title } = useSidebarMenu();

  return <h1 className="h1 hidden md:block">{title}</h1>;
}
