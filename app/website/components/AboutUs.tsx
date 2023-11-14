import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="flex flex-wrap justify-center items-center b-1">
      <div className="flex-col justify-center items-center p-5 m-5">
        <div
          className="relative h-60 w-60 shadow-2xl rounded-lg bg-cover bg-center transition-transform transform "
          style={{ backgroundImage: 'url("/profile.jpeg")' }}
        ></div>
        <div className="flex-col ">
          <h2 className="flex justify-center">Dr Amith</h2>
          <h3 className="flex justify-center">President</h3>
        </div>
      </div>
      <div className="flex-col justify-center items-center p-5 m-5">
        <div
          className="relative h-60 w-60 shadow-2xl rounded-lg bg-cover bg-center transition-transform transform  "
          style={{ backgroundImage: 'url("/profile.jpeg")' }}
        ></div>
        <div className="flex-col ">
          <h2 className="flex justify-center">Dr Amith</h2>
          <h3 className="flex justify-center">President</h3>
        </div>
      </div>
      <div className="flex-col justify-center items-center p-5 m-5">
        <div
          className="relative h-60 w-60 shadow-2xl rounded-lg bg-cover bg-center transition-transform transform "
          style={{ backgroundImage: 'url("/profile.jpeg")' }}
        ></div>
        <div className="flex-col ">
          <h2 className="flex justify-center">Dr Amith</h2>
          <h3 className="flex justify-center">President</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
