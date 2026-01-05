"use client";

import { usePathname } from "next/navigation";
import { mainMenu as m } from "@/lib/content";

export default function useSidebarMenu() {
  const pathname = usePathname();
  const menu = [];
  const title = pathname.split("/")[1].replace("-", " ").toUpperCase();

  if (pathname === "/") return { menu: [], title: "" };

  if (pathname.startsWith("/components")) menu.push(...(m.find((item) => item.url === "/components")?.subMenu || []));
  if (pathname.startsWith("/public-api")) menu.push(...(m.find((item) => item.url === "/public-api")?.subMenu || []));

  return { menu, title };
}
