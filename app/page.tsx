"use client"

import Club from "./website/components/Club";
import Events from "./website/components/Events";
import Hero from "./website/components/Hero";
import StickyCursor from "./website/components/StickyCursor";

export default function Home() {

  return (
    <div>
      <StickyCursor />
      <Hero />
      <Club />
      <Events/>
    </div>
  );
}
