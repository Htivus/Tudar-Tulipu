import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Documentation from "./components/Documentation";
import { Gallery } from "./components/Gallery";
import Parallax from "./components/Parallax";

const page = () => {
  return (
    <div>
     
      <Navbar />
      
      <Gallery />
      <Documentation />
      <Footer />
    </div>
  );
};

export default page;
