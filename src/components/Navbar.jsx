import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="h-16 flex justify-between items-center fixed w-full top-0 p-2 z-50 bg-gray-400">
        <div className="w-1/2 sm:w-1/3 h-full flex items-center justify-center">
          <img src={logo} alt="Robert Fox Logo" className="w-12" />
        </div>
        <div className="sm:hidden px-6" onClick={toggleMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} className="text-4xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-4xl" />
          )}
        </div>
        <div
          className={`${
            isOpen
              ? "absolute right-0 top-[64px] bg-white/30 pl-4 backdrop-blur-lg"
              : "hidden"
          } h-[calc(100dvh-64px)] w-2/3 flex flex-col justify-between items-center py-4 sm:flex sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:h-full sm:relative sm:top-0 z-40`}
        >
          <ul className="flex flex-col w-full justify-between text-xl uppercase gap-8 sm:gap-0 sm:flex-row sm:w-1/2 md:w-2/3 sm:text-lg">
            <li><Link to='/' >Home </Link></li>
            <li><Link to='/about' >About Me </Link></li>
            <li><Link to='/contact' >Contact </Link></li>
          </ul>
          <div className="flex text-2xl w-1/2 pb-[50%] sm:pb-0 sm:w-1/4 justify-between lg:justify-center lg:gap-8">
            <a href="https://x.com/SteveAstheRebel" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="www.dribbble.com"><FontAwesomeIcon icon={faDribbble} /></a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
