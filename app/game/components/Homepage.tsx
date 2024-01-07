import React from "react";
import Button from "./Button";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/libs/session";
import ProfileMenu from "./ProfileMenu";
const NavLinks = [
  { href: "/", key: "Play", text: "Play" },
  
];
const Homepage: React.FC = async () => {
  const session = await getCurrentUser();
  console.log(session);
  return (
    <div className="h-screen w-full  bg-blue-100 m-0">
      <div className="flex flex-col gap-5 items-center justify-center overflow-hidden ">
        <div className="">
          <img className="w-36" src="src/logofinal22.png" alt="" />
        </div>

        <div className="m-1 p-3 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-3xl">
            <strong>TULIPU</strong>
          </h1>
          <h6 className="w-3/4 text-center">
            Get Two Chance To Match The Jumbled Word
          </h6>
        </div>
        <div className="sm:flex-row flex-col flex justify-center items-center">
          <Button>HOW</Button>
          <div className="flexCenter">
            {session?.user ? "" : <AuthProviders />}
          </div>
          {session?.user ? <Button variant="primary"><Link className="font-extrabold alink" href="/game/play" key="Play">Play
            </Link></Button> : ""}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
