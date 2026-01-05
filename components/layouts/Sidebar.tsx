"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import useSidebarMenu from "@/hooks/useSidebarMenu";

export default function Sidebar() {
  const { menu } = useSidebarMenu();

  return (
    <nav className="hidden md:block border-r min-h-[calc(100vh-8rem)]">
      {menu.map((item, i) => (
        <Button key={i} variant={"ghost"} asChild className="block">
          <Link key={i} href={item.url} className="">
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
