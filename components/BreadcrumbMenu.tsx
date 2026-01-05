"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { mainMenu as m } from "@/lib/content";

export default function BreadcrumbMenu() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");

  const generateSecondMenuItems = (parentUrl: string) => {
    if (!parentUrl) return m.map((menu) => ({ label: menu.label, url: menu.url }));
    return m.find((menu) => menu.url === `/${parentUrl}`)?.subMenu;
  };

  if (pathname.length === 1) return null;

  return (
    <Breadcrumb className="mb-3 mt-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={index}>
              <BreadcrumbSeparator className="mx-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <ChevronRight size={15} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {generateSecondMenuItems(segments[index - 1])?.map((item) => (
                      <DropdownMenuItem key={item.url} asChild>
                        <Link href={item.url}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                {index === segments.length - 1 ? (
                  <BreadcrumbPage>{segment.replace(/-/g, " ")}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{segment.replace(/-/g, " ")}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
