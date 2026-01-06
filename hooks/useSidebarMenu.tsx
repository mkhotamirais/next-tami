"use client";

import { usePathname } from "next/navigation";
import { mainMenu as m } from "@/lib/content";

export default function useSidebarMenu() {
  const pathname = usePathname();

  if (pathname === "/") return { menu: [], title: "" };

  const menu = [];
  const title = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment) => segment.replace("-", " "))
    .join(" - ")
    .toUpperCase();

  if (pathname.startsWith("/components")) menu.push(...(m.find((item) => item.url === "/components")?.subMenu || []));
  if (pathname.startsWith("/public-api")) menu.push(...(m.find((item) => item.url === "/public-api")?.subMenu || []));
  if (pathname.startsWith("/animation")) menu.push(...(m.find((item) => item.url === "/animation")?.subMenu || []));
  if (pathname.startsWith("/other")) menu.push(...(m.find((item) => item.url === "/other")?.subMenu || []));

  return { menu, title };
}
