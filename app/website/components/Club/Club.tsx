"use client"
import Image from "next/image";

import "./Club.css"
export default function Club() {
  return (
    <div id="#club" className=" bg-gray-900  w-full -z-10">
      <h2 className="club-heading p-6 text-5xl font-bold ">About the Club</h2>
      <section className="">
        <div className="container m-4 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div className=" justify-left p-6 text-center  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="mb-8 text-3xl font-bold  md:text-6xl">
              Tudar Club
              <span className="text-club">senectus</span>
            </p>
            <div>
              <div className="mask">
                <p className="mt-6 mb-8 text-2xl font-bold sm:mb-12">
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
            <Image
              src="/src/logo.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              height={288}
              width={288}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

