"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-900">
      <h1 className="flex justify-center items-center text-[#afa18f] text-6xl font-bold">
        Tulu Chronicles
      </h1>
      <br />
      <h1 className="flex justify-center items-center text-[#fefefe] text-5xl font-semibold">
        Where Tradition Meets the Digital Age
      </h1>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

const cards = [
  {
    url: "/src/logo.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/src/logo.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/src/logo.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/src/logo.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/src/logo.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/src/logo.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/src/logo.png",
    title: "Title 7",
    id: 7,
  },
];
