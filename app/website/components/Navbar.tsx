import React from "react";
import "./navbar.css";
import Link from "next/link";
const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/", key: "Club", text: "Club" },
  { href: "/", key: "About", text: "About" },
  { href: "/", key: "Events", text: "Events" },
  { href: "/", key: "Contact", text: "Contact" },
];
const Navbar = () => {
  return (
    <nav className="py-5 px-8 border-b border-nav-border">
      <div className="flex w-full">
        <a href="#" className="float-left ml-0">
          <span className="text-2xl whitespace-nowrap ">Tudar</span>
        </a>
        {/* <p className="text-bold text-3xl m-4">Tudar</p> */}
        <div className="flex items-center justify-center w-screen ">
        <ul className="md:flex justify-center hidden min-w-screen text-sm gap-10 margin-auto navlist">
          {NavLinks.map((link) => (
            <Link className="font-extrabold alink" href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
        </div>
        <div className="md:hidden flex  w-10 h float-right m-0 hamburger p-1">
          <div className="bar-hamburger"></div>
          <div className="bar-hamburger"></div>
          <div className="bar-hamburger"></div>
        </div>
      </div>
      <div className="flexCenter"></div>
      <div className="fixed  bg-gray-200 bottom-10 right-10 rounded-full w-10 h-10"></div>
    </nav>
  );
};
export default Navbar;
