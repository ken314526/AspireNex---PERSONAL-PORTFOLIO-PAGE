"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/#about",
    },
    {
      id: 3,
      name: "Skills",
      link: "/#skills",
    },
    {
      id: 4,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      name: "Contact Me",
      link: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 end-0 border-b border-gray-600 ${
        isOpen ? "bg-black" : "dark:bg-gray-900"
      }`}
    >
      <div className="max-w-screen-xl bg-black flex flex-wrap items-center justify-between p-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-6 h-6" />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="w-full flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navlinks.map((nl) => (
              <li key={nl.id}>
                <a
                  href={nl.link}
                  className="w-full block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 md:hover:bg-gray-100 md:hover:text-gray-800 md:dark:hover:text-gray-100 dark:text-white dark:hover:text-white md:dark:hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {nl.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
