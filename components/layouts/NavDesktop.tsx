import { mainMenu as m } from "@/lib/content";
import { Button } from "../ui/button";
import Link from "next/link";
export default function NavDesktop() {
  return (
    <nav className="hidden md:block">
      {m.map((item, i) => (
        <Button key={i} variant={"ghost"} asChild>
          <Link href={item.url}>{item.label}</Link>
        </Button>
      ))}
    </nav>
  );
}
