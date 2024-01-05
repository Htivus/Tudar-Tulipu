import Navbar from "./website/components/Navbar";
import Club from "./website/components/Club";
// import Events from "./website/components/Events";
import Hero from "./website/components/Hero";
import StickyCursor from "./website/components/StickyCursor";
import Footer from "./website/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Club />
      <Footer />
    </div>
  );
}
