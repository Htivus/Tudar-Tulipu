import Navbar from "./website/components/Navbar";
import Club from "./website/components/Club";
import Hero from "./website/components/Hero";
import StickyCursor from "./website/components/StickyCursor";
import Events from "./website/components/Events";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <StickyCursor />
      <Navbar />
      <Hero />
      <Club />
      <Events />
    </div>
  );
}
