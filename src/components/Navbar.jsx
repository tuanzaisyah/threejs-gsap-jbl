import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="w-screen h-14 px-6 py-4 flex flex-row justify-between items-center relative z-10">
      <div>
        <h3 className="font-medium text-2xl">JBL</h3>
      </div>

      <div className="">
        <div
          className={`md:static w-full absolute top-0 left-0 bg-yellow-700 md:bg-yellow-100 px-6 md:p-0 py-6 pt-10 flex flex-col items-center justify-center transition-all ease-in-out duration-200 ${
            menu ? "top-0" : "top-[-100vh]"
          }`}
        >
          <div>
            <IoIosClose
              onClick={() => setMenu(false)}
              className="text-black hover:text-yellow-100 text-4xl cursor-pointer absolute top-4 right-4 md:hidden"
            />
          </div>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <li
              onClick={() => setMenu(false)}
              className="hover:text-yellow-100 md:hover:text-yellow-700 md:text-lg cursor-pointer"
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={() => setMenu(false)}
              className="hover:text-yellow-100 md:hover:text-yellow-700 md:text-lg cursor-pointer"
            >
              <a href="#features">Features</a>
            </li>
            <li
              onClick={() => setMenu(false)}
              className="hover:text-yellow-100 md:hover:text-yellow-700 md:text-lg cursor-pointer"
            >
              <a href="#personalized">Personalized</a>
            </li>
            <li
              onClick={() => setMenu(false)}
              className="hover:text-yellow-100 md:hover:text-yellow-700 md:text-lg cursor-pointer"
            >
              <a href="#highlights">Highlights</a>
            </li>
            <li
              onClick={() => setMenu(false)}
              className="hover:text-yellow-100 md:hover:text-yellow-700 md:text-lg cursor-pointer"
            >
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <BsBag className="text-black hover:text-yellow-100 md:hover:text-yellow-700 md:text-lg text-xl cursor-pointer" />
            </li>
          </ul>
        </div>
        <div>
          <IoIosMenu
            onClick={() => setMenu(true)}
            className="text-black hover:text-yellow-700 text-3xl cursor-pointer md:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
