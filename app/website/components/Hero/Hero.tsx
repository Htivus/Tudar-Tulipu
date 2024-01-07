"use client"
import React, { useRef } from "react";
import Image from "next/image";
import "./Hero.css"
import { motion, useScroll, useTransform } from "framer-motion";
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center">
        
      <motion.div
        style={{ y: textY }}
        className="opacity-100 font-bold text-white text-7xl md:text-9xl relative z-30">
        <Image src="/src/tudar.png" alt="Tudar" width={650} height={300}></Image>
      </motion.div>
      <motion.div
        className="min-h-screen bg-contain object-center absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/src/p-below-img.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/src/p-above-img.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Hero;

