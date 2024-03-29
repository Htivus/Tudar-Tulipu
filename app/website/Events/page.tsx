import React from "react";
import { getAllEvents } from "@/app/server/actions";
import Image from "next/image";
import Link from "next/link";
const page = async () => {
  const events = await getAllEvents();
  return (
    <div>
      <div className="bg-black text-justify font-sans py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0 flex items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
              Tudar Events
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {events.map((event) => (
              <Link href={`/Event/${event.id}`}>
                <Image
                  className="rounded-md"
                  src={event.imageUrl}
                  alt=""
                  width={500}
                  height={500}
                />

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                    <a href="">
                      <span className="absolute inset-0" />
                      {event.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                    {event.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJB_jXg-txmKOlPMmgamsf5qUgExNPG6gm2tofOXCPR=s96-c"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <span className="absolute inset-0" />
                      Tudar Nitte
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
