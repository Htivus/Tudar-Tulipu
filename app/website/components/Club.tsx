"use client"

import StickyCursor from "./StickyCursor";

//import React, { useLayoutEffect, useRef } from "react";

export default function Club() {
  return (
    
    <div className="h-screen bg-gray-900  w-full">
      <StickyCursor/>
      <h2 className="club-heading p-6 text-5xl font-bold ">About the Club</h2>
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="mb-8 text-5xl font-bold  sm:text-6xl">
              Tudar Club
              <span className="text-club">senectus</span>
            </h1>
            <div>
              <div className="mask">
                <p className="mt-6 mb-8 text-4xl font-bold sm:mb-12">
                  Solmelu yencha ullar in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
              </div>
              {/* <div className="body">
                  <p className=" mt-6 mb-8 text-4xl font-bold sm:mb-12">
                    Hey there how are you in condimentum ac integer
                    <br className="hidden md:inline lg:hidden" />
                    turpis pulvinar, est scelerisque ligula sem
                  </p>
                </div> */}
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="/src/logo.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
