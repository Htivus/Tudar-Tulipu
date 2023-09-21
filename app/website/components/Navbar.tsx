import React from "react";

import Link from "next/link";

const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/", key: "Club", text: "Club" },
  { href: "/", key: "About", text: "About" },
  { href: "/", key: "Events", text: "Events" },
  { href: "/", key: "Members", text: "Members" },
];
const Navbar = () => {
  
  return (
    <nav className=" flexBetween py-5 px-8 border-b border-nav-border gap-4">
      <div
        className=" flex-1
      flexStart gap-10"
      >
        <p className="text-bold text-3xl m-4">Tudar</p>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter">
       </div>
    </nav>
  );
};

export default Navbar;