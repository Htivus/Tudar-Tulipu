"use client";
import React from "react";
import Image from "next/image";
import { animations, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export const Gallery = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView1) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
          delay: 0.5,
        },
      });
    }
    if (!inView1) {
      animation1.start({
        x: "-50vw",
      });
    }
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          // delay: 0.5,
        },
      });
    }
    if (!inView2) {
      animation2.start({
        x: "50vw",
      });
    }

    console.log("useEffect", inView1);
  }, [inView1, inView2]);
  return (
    <div>
      <div ref={ref1}>
        <motion.div
          animate={animation1}
          className=" lg:flex flex-row-reverse justify-center gap-2 mt-40 md:block  "
        >
          <Image
            src="/grp.jpg"
            className="rounded-lg"
            alt="hbd"
            width={700}
            height={1000}
          ></Image>

          <div className="flex-col justify-center items-center h-full my-auto">
            <h1 className="text-2xl sm:text-xl md:text-4xl">About Us</h1>
            <h2 className="max-w-lg overflow-auto text-xl sm:text-sm md:text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt recusandae nihil mollitia officia nobis aliquid
              dolor labore. Unde nesciunt nulla, alias perferendis nisi neque
              eaque laborum eos cum officiis.
            </h2>
          </div>
        </motion.div>
      </div>
      <div ref={ref2}>
        <motion.div animate={animation2}>
          <div className="lg:flex justify-center gap-2 my-40  md:block ">
            <div className="collage_img  ">
              <Image
                src="/grp.jpg"
                className="rounded-lg"
                alt="hbd"
                width={700}
                height={1000}
              ></Image>
            </div>
            <div className="flex-col justify-center items-center h-full my-auto ">
              <h1 className="lg:text-4xl text-2xl  sm:text-xl md:text-4xl">
                About Us
              </h1>

              <h2 className="max-w-lg overflow-auto text-xl sm:text-sm md:text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati, sunt recusandae nihil mollitia officia nobis
                aliquid dolor labore. Unde nesciunt nulla, alias perferendis
                nisi neque eaque laborum eos cum officiis.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
