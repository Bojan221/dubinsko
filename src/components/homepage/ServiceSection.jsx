import React from "react";
import TitleWrapper from "./TitleWrapper";
import { PiArmchairFill } from "react-icons/pi";
import { FaMattressPillow } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import SingleServiceCard from "./SingleServiceCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <FaCar />,
      title: "Dubinsko čišćenje vozila",
      description:
        "Kompletno čišćenje enterijera auta, sjedišta, tepiha, plastike i svih detalja.",
    },
    {
      icon: <PiArmchairFill />,
      title: "Dubinsko čišćenje namještaja",
      description:
        "Uklanjamo mrlje, mirise i bakterije sa svih vrsta tapaciranog namještaja.",
    },
    {
      icon: <FaMattressPillow />,
      title: "Madraci i tepisi",
      description:
        "Higijensko pranje i dezinfekcija za zdraviji dom bez prašine.",
    },
    {
      icon: <BsHouseFill />,
      title: "Čišćenje po pozivu",
      description:
        "Dolazimo na Vašu adresu u dogovoreno vrijeme, brzo i efikasno.",
    },
  ];

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 py-5">
      <TitleWrapper section="usluge" title="Šta nudimo?" align="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          return (
            <SingleServiceCard
              key={service.title}
              service={service}
              data-aos={index === 0 || index === 1 ? "fade-right" : "fade-left"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSection;
