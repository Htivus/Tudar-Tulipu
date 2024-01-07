"use client";
import React from "react";
import Image from "next/image";
import { LiaLanguageSolid } from "react-icons/lia";

const Card = () => {
  return (
    <section className="m-2 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-8xl mx-auto">
      <div className=" m-4 group px-8 py-8 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#afa18f] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
        <div className="w-44 flex justify-center items-center aspect-square text-[rgb(83,82,82)] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto">
          <Image
            src="/src/tudar.png"
            alt="Tudar-logo"
            width={200}
            height={300}></Image>
        </div>

        <p className="font-bold text-gray-200 tracking-wider group-hover:text-gray-700 text-4xl">
          Tulu Translator
        </p>
        <p className=" font-bold text-gray-100 text-xl">
          Discover Tulu's Secrets: Your Language Companion Awaits!
        </p>
        <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#212121] to-[#212121] active:scale-95">
          <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#212121] text-[#212121] rounded-[14px] bg-gradient-to-t from-[#fff] to-[#fff]">
            <LiaLanguageSolid />
            Translate!
          </span>
        </button>
      </div>

      <div className="m-4 group px-8 py-8 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#afa18f] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
        <div className="w-44 flex justify-center items-center aspect-square text-[rgb(83,82,82)] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto">
          <Image
            src="/src/tudar.png"
            alt="Tudar-logo"
            width={200}
            height={300}></Image>
        </div>

        <p className="font-bold text-gray-200 tracking-wider group-hover:text-gray-700 text-4xl">
          Tulu Quiz
        </p>
        <p className="font-bold text-gray-100 text-xl">
          Quiz Time! How Well Do You Know the Language of Tulu?
        </p>
        <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#212121] to-[#212121] active:scale-95">
          <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#212121] text-[#212121] rounded-[14px] bg-gradient-to-t from-[#fff] to-[#fff]">
            <svg
              stroke-width="2"
              stroke-linejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"></path>
            </svg>
            Play Game
          </span>
        </button>
      </div>
    </section>
  );
};

export default Card;
