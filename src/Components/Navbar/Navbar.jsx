import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../../Context/FoodContext";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  function NavOpen() {
    setOpenNav(!openNav);
  }

  return (
    <>
      <nav className="bg-white border-gray-200  ">
        <div className=" flex flex-wrap  justify-between  p-4 lg:h-24 ">
          <li className="flex items space-x-3 rtl:space-x-reverse">
            <Link to={"/"}>
              <span className="text-5xl  text-dark  navfont">Testbite</span>
            </Link>
          </li>
          <button
            onClick={NavOpen}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              openNav ? "visible" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  onClick={() => MealsByArea()}
                  to={"/"}
                  className="block py-2 px-3 text-dark"
                  aria-current="page"
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                >
                  About
                </Link>
              </li>
              <li>
                <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">
                  Category
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
