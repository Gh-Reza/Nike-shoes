import { FaShoppingBag } from "react-icons/fa";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = () => {
  const [isMenuShown, setMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Nike logo */}
      <NikeLogo className="w-20 h-20" />

      {/* Hamburger menu */}
      <button
        onClick={() => setMenuShown(!isMenuShown)}
        className="p-1 rounded-sm lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className={`w-full lg:w-auto lg:block ${!isMenuShown && "hidden"}`}>
        <ul className="p-4 text-lg rounded lg:space-x-6 lg:flex bg-gray-50 lg:bg-transparent">
          {ROUTES.map((route, i) => (
            <li
              className={`px-3 py-2 rounded cursor-pointer ${
                i === 0
                  ? "lg:first:bg-transparent lg:first:text-blue-500 first:bg-blue-500 first:text-white"
                  : "hover:bg-gray-100"
              } `}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Cart icon */}
      <div className="fixed w-12 h-12 rounded-full shadow-md cursor-pointer lg:static left-4 bottom-4 flex-center">
        <FaShoppingBag />
      </div>
    </nav>
  );
};

export default Nav;
