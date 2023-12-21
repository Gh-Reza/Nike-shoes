import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      {/* Nike logo */}
      <NikeLogo className="w-20 h-20" />
      {/* Hamburger menu */}
      <button className="p-1 rounded-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
};

export default Nav;
