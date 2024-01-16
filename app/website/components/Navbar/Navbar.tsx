"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./Menu";
import { useSession } from "next-auth/react";
const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/Team", key: "Team", text: "Club Team" },
  { href: "/Aboutus", key: "About", text: "About" },
  { href: "/Events", key: "Events", text: "Events" },
  { href: "/Blogs", key: "Blog", text: "Blog" },
  { href: "/ContactUs", key: "Contact", text: "Contact" },
];
const Navbar = () => {
  const [flag, setflag] = useState(true);
  const { data: session } = useSession();
  
  
  const handleClick = () => {
    const bars = document.querySelectorAll<HTMLElement>(".bar-hamburger");
    const menu = document.getElementById("menu");
    let color = "white";
    if (menu) {
      if (flag) {
        color = "black";
        bars[1].style.display = "none";
        bars[0].style.animation = "cross-1 0.2s ease-in forwards";
        bars[2].style.animation = "cross-2 0.2s ease-in forwards";
        menu.style.display = "block";
        menu.style.animation = "menu-click-animation 0.2s ease-in";
      }
      if (!flag) {
        color = "white";
        menu.style.display = "none";
        menu.style.animation = "none";
        bars[1].style.display = "block";
        bars[0].style.animation = "cross-1 0.3s ease-in reverse";
        bars[2].style.animation = "cross-2 0.3s ease-in reverse";
      }
      bars.forEach((bar) => {
        bar.style.background = color;
      });
      setflag(!flag);
    }
  };
  return (
    <nav className="navbar-bg py-4 px-8 border-b w-screen border-nav-border absolute z-40 ">
      <div
        className="menu-container absolute top-0 left-0 w-screen"
        id="menu"
        style={{ display: "none" }}>
        <Menu Navlist={NavLinks}  />
      </div>
      <div className="flex w-full">
        <a href="#" className="float-left ml-0">
          <span className="whitespace-nowrap">
            <Image
              src="/src/tudar.png"
              alt="Tudar"
              width={120}
              height={100}></Image>
          </span>
        </a>
        <div className="flex items-center justify-center w-screen ">
          <ul className="md:flex justify-center flex-row min-w-screen hidden gap-10 navlist">
            {NavLinks.map((link) => (
              <Link className="alink" href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
            


          </ul>
        </div>
        <div className="float float-right">

        {session ? (
          <div className="hidden md:block"><Image width={50} height={50} src={session.user?.image || ""} alt="err" className="rounded-full"></Image> </div>
          ) : (
            <div>
              <Link href="/api/auth/signin">Sign in</Link>
            </div>
            )}
        </div>
        <div
          className="md:hidden flex  w-10 h float-right m-0 hamburger p-1"
          id="hamburger"
          onClick={handleClick}>
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
