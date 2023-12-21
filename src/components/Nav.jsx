import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Nike logo */}
      <NikeLogo className="w-20 h-20" />

      {/* Hamburger menu */}
      <button className="p-1 rounded-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className="w-full">
        <ul className="p-4 text-lg rounded bg-gray-50">
          {ROUTES.map((route, i) => (
            <li
              className={`px-3 py-2 rounded ${
                i === 0
                  ? "first:bg-blue-500 first:text-white"
                  : "hover:bg-gray-100"
              } `}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
