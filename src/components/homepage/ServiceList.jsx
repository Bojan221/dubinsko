import React from "react";
import { PiSeatFill } from "react-icons/pi";
import { FaSoap, FaBoxOpen, FaCouch } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaSprayCan } from "react-icons/fa6";
import TitleWrapper from "./TitleWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ServiceList() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const services = [
    { name: "Pranje jednog sjedišta", icon: <PiSeatFill />, price: "15" },
    { name: "Trosjed", icon: <FaCouch />, price: "30" },
    { name: "Madrac (jedan)", icon: <IoBed />, price: "40" },
    { name: "Tepih (m2)", icon: <FaSoap />, price: "5" },
    { name: "Pranje gepeka", icon: <FaBoxOpen />, price: "15" },
    { name: "Dezinfekcija", icon: <FaSprayCan />, price: "10" },
  ];

  return (
    <div className="col-span-12 xl:col-span-3">
      <div className="flex flex-col gap-4">
        <TitleWrapper section="pojedinačne usluge" title="Pojedinačne usluge" />

        <div className="flex flex-col gap-3 mt-2">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="relative pb-4"
            >
              {/* CONTENT */}
              <div className="flex items-center justify-between">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-3 text-white">
                  <span className="text-white text-xl">{item.icon}</span>

                  <span className="text-base font-medium text-white">
                    {item.name}
                  </span>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-white font-semibold text-base">
                  {item.price}{" "}
                  <span className="text-gray-300 font-normal">KM</span>
                </div>
              </div>

              {/* FADE LINE */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-px bg-linear-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
