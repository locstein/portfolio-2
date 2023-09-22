import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Navbar style
    <header className="flex w-full h-[5rem] px-4 justify-between items-center bg-black text-gray-300">
      {/* LOGO */}
      <span className="font-bold text-xl">Portfolio</span>
      {/* NavLinks */}
      <ul className="hidden md:flex">
        <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* mobile view */}
      <div onClick={handleClick} className="md:hidden z-[99] cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-[300px] h-screen bg-[#000814] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
