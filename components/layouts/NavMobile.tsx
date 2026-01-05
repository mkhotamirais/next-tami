import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { mainMenu as m } from "@/lib/content";
import Link from "next/link";

export default function NavMobile() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size={"icon"} aria-label="menu-trigger">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-72">
          <SheetHeader className="border">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="px-2">
            {m.map((item, i) => (
              <SheetClose key={i} asChild>
                <Button variant={"ghost"} asChild className="block">
                  <Link href={item.url}>{item.label}</Link>
                </Button>
              </SheetClose>
            ))}
          </div>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
