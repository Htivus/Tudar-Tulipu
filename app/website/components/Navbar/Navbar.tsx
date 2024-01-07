"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/website/Team", key: "Team", text: "Club Team" },
  { href: "/", key: "About", text: "About" },
<<<<<<< HEAD
  { href: "/Events", key: "Events", text: "Events" },
  { href: "/Blogs", key: "Blog", text: "Blog" },
  { href: "/", key: "Contact", text: "Contact" },
=======
  { href: "/", key: "Events", text: "Events" },
  { href: "/", key: "Blog", text: "Blog" },
  { href: "/website/ContactUs", key: "Contact", text: "Contact" },
>>>>>>> 37bbdde46f17d11662bebcdc54c9e3a06c1b70f9
];
const Navbar = () => {
  const [flag, setflag] = useState(true);
  const handleClick = () => {
    console.log("Hello");
    const ele = document.getElementById("hamburger");
    const navlist = document.getElementById("navlist");
    if (navlist) {
      if (flag) {
        navlist.style.display = "flex";
      }
      if (!flag) {
        navlist.style.display = "none";
      }

      setflag(!flag);
    } else {
      console.error("Element with id 'hamburger' not found.");
    }
  };
  return (
    <nav className="navbar-bg py-4 px-8 border-b border-nav-border absolute z-30 ">
      <div className="flex w-full">
        <a href="#" className="float-left ml-0">
          <span className=" whitespace-nowrap">
            <Image
              src="/src/tudar.png"
              alt="Tudar"
              width={120}
              height={100}
            ></Image>
          </span>
        </a>
        {/* <p className="text-bold text-3xl m-4">Tudar</p> */}
        <div className="flex items-center justify-center w-screen ">
          <ul
            className="md:flex  md:justify-center md:flex-row min-w-screen flex-col hidden text-sm gap-10 margin-auto navlist"
            id="navlist"
          >
            {NavLinks.map((link) => (
              <Link className="alink" href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div
          className="md:hidden flex  w-10 h float-right m-0 hamburger p-1"
          id="hamburger"
          onClick={handleClick}
        >
          <div className="bar-hamburger"></div>
          <div className="bar-hamburger"></div>
          <div className="bar-hamburger"></div>
        </div>
      </div>
      <div className="flexCenter"></div>
    </nav>
  );
};
export default Navbar;
