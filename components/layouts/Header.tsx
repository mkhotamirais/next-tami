import { Search } from "lucide-react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <header className="sticky top-0 h-16 border-b border-gray-200 bg-white z-30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <NavDesktop />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Search />
          </div>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
