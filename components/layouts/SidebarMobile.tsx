"use client";

import useSidebarMenu from "@/hooks/useSidebarMenu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function SidebarMobile() {
  const { menu, title } = useSidebarMenu();
  if (menu.length === 0) return null;

  return (
    <div className="md:hidden flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="md:hidden">
          <div className="px-">
            {menu.map((item, i) => (
              <DropdownMenuItem key={i} asChild>
                <Button variant={"ghost"} asChild className="block">
                  <Link href={item.url}>{item.label}</Link>
                </Button>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <h1 className="h1">{title}</h1>
    </div>
  );
}
