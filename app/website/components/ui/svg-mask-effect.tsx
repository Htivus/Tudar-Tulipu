"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 300,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      animate={{
        backgroundColor: isHovered ? "var(--white)" : "var(--white)",
      }}>
      <motion.div
        className="w-full h-full flex items-center justify-center absolute md:pr-40  bg-white  [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat] cursor_styles"
        style={{zIndex:"100"}}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}>
        <div className="absolute  font-bold bg-white h-1/2 w-full z-0 " />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="  text-justify text-gray-900  text-2xl font-bold relative z-20">
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center  text-gray-900">
        {revealText}
      </div>
    </motion.div>
  );
};
