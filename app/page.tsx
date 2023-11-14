import Parallax from "./website/components/Parallax";
import Navbar from "./website/components/Navbar";
import { Gallery } from "./website/components/Gallery";
import Documentation from "./website/components/Documentation";
import Footer from "./website/components/Footer";
import AboutUs from "./website/components/AboutUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Parallax />
      <Gallery />

      <Documentation />
      <AboutUs />
      <Footer />
    </>
  );
}
