import Navbar from "./website/components/Navbar/Navbar";
import Club from "./website/components/Club/Club";
import Hero from "./website/components/Hero/Hero";
import StickyCursor from "./website/components/StickyCursor/StickyCursor";
import Events from "./website/components/Main-Events/Events";
import Card from "./website/components/Card-section/Card";
import Blog from "./website/components/Blog Carousel/Blog";
import Footer from "./website/components/Footer/Footer";


export default function Home() {
  return (
    <div className="bg-gray-900">
      <StickyCursor />
      <Navbar />
      <Hero />
      <Club />
      <Events />
      <Card/>
      <Blog/>
      <Footer/>
    </div>
  );
}

