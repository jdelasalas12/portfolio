import Link from "next/link";
import { ModeToggle } from "./toggle";
import { Menu } from "lucide-react";
import { ActiveLink } from "./Active";

const NavBar = () => {
  const defaultStyles =
    "transition-colors duration-200 hover:text-[#FD6F00]  dark:text-white dark:hover:text-[#FD6F00]";

  return (
    <div className="bg-[#EFE9E3] dark:bg-[#1E1E1E] text-gray-800 dark:text-white flex justify-between items-center px-4 py-4 rounded-lg">
      <h1 className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent text-2xl font-medium">
        LOGO
      </h1>
      <div className="flex gap-4 max-md:hidden font-medium ">
        <ActiveLink
          activeClassName={`${defaultStyles}`}
          inactiveClassName="text-black"
          exact={false}
          href="/"
        >
          Home
        </ActiveLink>
        <ActiveLink
          activeClassName={`${defaultStyles}`}
          inactiveClassName="text-black"
          exact={false}
          href="/"
        >
          Services
        </ActiveLink>
        <ActiveLink
          activeClassName={`${defaultStyles}`}
          inactiveClassName="text-black"
          exact={false}
          href="/"
        >
          About Me
        </ActiveLink>
        <ActiveLink
          activeClassName={`${defaultStyles}`}
          inactiveClassName="text-black"
          exact={false}
          href="/"
        >
          Portfolio
        </ActiveLink>
        <ActiveLink
          activeClassName={`${defaultStyles}`}
          inactiveClassName="text-black"
          exact={false}
          href="/"
        >
          Contact
        </ActiveLink>
      </div>
      <div className="flex gap-4 items-center">
        <ModeToggle />
        <button
          className="
          ring-1
          ring-gray
          shadow-lg
          rounded-md
          px-2
          py-1
          text-sm
          font-medium
          cursor-pointer
          hover:text-[#FD6F01] 
          hover:bg-black
          dark:hover:text-[#FD6F00]
          dark:hover:bg-white
          transition-all
          duration-300"
        >
          Hire Me
        </button>
        <Menu className="hidden max-md:block" />
      </div>
    </div>
  );
};

export default NavBar;
