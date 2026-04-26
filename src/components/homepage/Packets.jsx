import { useEffect } from "react";
import TitleWrapper from "./TitleWrapper";
import { FaRegCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Packets() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const packets = [
    {
      title: "Basic",
      description: "Sjedišta + pod",
      services: ["Pranje sjedišta", "Pranje podova", "Usisavanje"],
      price: "50",
    },
    {
      title: "Standard",
      description: "Kompletan enterijer",
      services: [
        "Pranje sjedišta",
        "Pranje podova",
        "Plastike",
        "Dezodoracija",
      ],
      price: "80",
    },
    {
      title: "Premium",
      description: "Detaljno + dezinfekcija",
      services: [
        "Sve iz standarda",
        "Dezinfekcija parom",
        "Dugotrajna zaštita",
      ],
      price: "100",
    },
  ];

  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex flex-col gap-4 w-full">
        <TitleWrapper
          section={"cjenovnik - paketi"}
          title={"Paketi koji štede više (50-100 KM)"}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packets.map((packet, index) => (
            <div
              key={index}
              className="bg-[#ffffff15] rounded-2xl p-5 flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all duration-200"
              data-aos={`${index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}`}
            >
              {/* HEADER */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {packet.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {packet.description}
                </p>
              </div>

              {/* SERVICES */}
              <div className="mt-4 flex flex-col gap-2">
                {packet.services.map((service, i) => (
                  <span
                    key={i}
                    className="text-gray-200 text-sm flex items-center gap-2"
                  >
                    <FaRegCheckCircle className="text-blue-600" size={16} />
                    {service}
                  </span>
                ))}
              </div>

              {/* PRICE */}
              <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-gray-300 text-sm">Cijena</span>
                <span className="text-white font-bold text-xl">
                  {packet.price} KM
                </span>
              </div>

              {/* BUTTON */}
              <div className="mt-5">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer w-full hover:bg-blue-700 transition-all duration-200">
                  Odaberi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packets;
