import React from "react";
import "./navbar.css";
import { getCurrentUser } from "@/libs/session";
import { HelpCircle, Menu, Flame } from 'lucide-react';
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="py-2 px-8 border-b border-nav-border bg-white">
      <div className="flex w-full">
        <Menu className="h-10 float-left p-0 text-black"/>      
        {/* <p className="text-bold text-3xl m-4">Tudar</p> */}
        <div className="flex items-center justify-center w-screen ">
        <ul className="md:flex justify-center hidden min-w-screen text-sm gap-10 margin-auto navlist">
          
          <span className="extra-bold alink">Tudar-Tulipu</span>
        </ul>
        </div>
       <div className="flex justify-center items-center gap-5">
       <HelpCircle className="h-10   text-black"/>
        <Flame className="h-10  text-black"/>
        <div className="flex justify-end  ">
        {session?.user ? (
          <ProfileMenu session={session} />
        ) : (
          <h2>Please Login</h2>
        )}{" "}
      </div>
       </div>
        
      </div>
      <div className="flexCenter"></div>
      <div className="fixed  bg-gray-200 bottom-10 right-10 rounded-full w-10 h-10"></div>
    </nav>
  );
};
export default Navbar;