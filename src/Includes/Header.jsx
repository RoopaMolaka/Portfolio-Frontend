import React, { useState } from "react";
import { navLinks } from "../utils/CommonData";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <ul className=" fixed z-50 top-[18%] text-white  right-3 hidden xl:flex gap-5 w-[10%] flex-col justify-center items-end py-10 px-10 ">
        {navLinks.map((navItem, i) => {
          const Icon = navItem.icon;
          return (
            <Link to={navItem.Link} key={i} className="flex items-center">
              <li className="group    rounded-full hover:bg-orange-500 cursor-pointer p-4 flex items-center justify-center transition-transform duration-300 ">
                {/* Text on the LEFT */}
                <span
                  className=" right-full px-4
       text-white rounded-full  text-base
      opacity-0 translate-x-2
      group-hover:opacity-100 group-hover:translate-x-0
      transition-all duration-300 whitespace-nowrap"
                >
                  {navItem.name}
                </span>

                {/* Icon (always visible, centered) */}
                <Icon className="text-2xl text-white" />
              </li>
            </Link>
          );
        })}
      </ul>
      {/* ********************************* Hamburger Icon ******************************** */}
      <div className="xl:hidden fixed top-5 right-5 z-50">
        {/* ******************************** Toggle Button ******************************** */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl p-2 focus:outline-none"
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        {/* ******************************** Sidebar Menu *********************************/}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-white text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl focus:outline-none"
            >
              <IoClose />
            </button>
          </div>

          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((navItem, i) => (
              <li key={i}>
                <Link
                  to={navItem.Link}
                  className="block px-2 py-2 rounded-lg text-white hover:bg-gray-700 transition"
                  onClick={() => setMenuOpen(false)} 
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
