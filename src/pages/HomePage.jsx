import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import ServiceSection from "../components/homepage/ServiceSection"
import wallpaper from "../images/wallpaper.png";
function HomePage() {
  return (
    <div>
      <HeroSection />
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/85">
        </div>
        <div className="relative z-10">
          <ServiceSection/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
