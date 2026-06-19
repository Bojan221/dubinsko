import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle, FaStar, FaPhone } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import { FaSoap, FaBoxOpen, FaCouch } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaSprayCan } from "react-icons/fa6";
import PriceHero from "../components/pricepage/PriceHero";
import TitleWrapper from "../components/homepage/TitleWrapper";
import wallpaper from "../images/wallpaper.png";
import AOS from "aos";
import "aos/dist/aos.css";

function PricePage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const packets = [
    {
      title: "Basic",
      description: "Sjedišta + pod",
      services: ["Pranje sjedišta", "Pranje podova", "Usisavanje"],
      price: "50",
      popular: false,
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
      popular: true,
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
      popular: false,
    },
  ];

  const services = [
    { name: "Pranje jednog sjedišta", icon: <PiSeatFill />, price: "15" },
    { name: "Trosjed", icon: <FaCouch />, price: "30" },
    { name: "Madrac (jedan)", icon: <IoBed />, price: "40" },
    { name: "Tepih (m²)", icon: <FaSoap />, price: "5" },
    { name: "Pranje gepeka", icon: <FaBoxOpen />, price: "15" },
    { name: "Dezinfekcija", icon: <FaSprayCan />, price: "10" },
  ];

  return (
    <div>
      <PriceHero />

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/85"></div>

        <div className="relative z-10">
          <div
            id="cjenovnik"
            className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col gap-16 lg:gap-24 py-12 lg:py-20"
          >
            {/* PAKETI */}
            <div className="flex flex-col gap-4">
              <TitleWrapper
                section="paketi"
                title="Paketi koji štede više"
                align="center"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 items-stretch">
                {packets.map((packet, index) => (
                  <div
                    key={packet.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className={`relative bg-[#ffffff15] rounded-3xl p-6 flex flex-col border transition-all duration-300 hover:-translate-y-2 ${
                      packet.popular
                        ? "border-blue-600 shadow-xl shadow-blue-600/20 md:scale-105"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    {packet.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                        <FaStar size={12} />
                        Najpopularniji
                      </span>
                    )}

                    {/* HEADER */}
                    <div className="text-center pb-5 border-b border-white/10">
                      <h3 className="text-2xl font-bold text-white">
                        {packet.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        {packet.description}
                      </p>
                      <div className="mt-5 flex items-end justify-center gap-1">
                        <span className="text-5xl font-extrabold text-white">
                          {packet.price}
                        </span>
                        <span className="text-gray-300 font-medium mb-1.5">
                          KM
                        </span>
                      </div>
                    </div>

                    {/* SERVICES */}
                    <div className="mt-6 flex flex-col gap-3 flex-1">
                      {packet.services.map((service, i) => (
                        <span
                          key={i}
                          className="text-gray-200 text-sm flex items-center gap-2.5"
                        >
                          <FaRegCheckCircle
                            className="text-blue-500 shrink-0"
                            size={16}
                          />
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => navigate("/contact")}
                      className={`mt-7 py-3 px-4 rounded-xl cursor-pointer w-full font-semibold transition-all duration-300 ${
                        packet.popular
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                      }`}
                    >
                      Odaberi paket
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* POJEDINAČNE USLUGE */}
            <div className="flex flex-col gap-4">
              <TitleWrapper
                section="po komadu"
                title="Pojedinačne usluge"
                align="center"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                {services.map((item, index) => (
                  <div
                    key={item.name}
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100}
                    className="group bg-[#ffffff15] border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:bg-[#ffffff20] hover:border-blue-600/50 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-600/20 border border-blue-600/40 p-3 text-blue-500 text-xl transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white">
                        {item.icon}
                      </div>
                      <span className="text-base font-medium text-white">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-white font-bold text-lg whitespace-nowrap">
                      {item.price}{" "}
                      <span className="text-gray-400 font-normal text-sm">
                        KM
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-sm text-center mt-2">
                * Cijene su okvirne i mogu varirati ovisno o veličini i stanju
                površine. Za tačnu ponudu nas slobodno kontaktirajte.
              </p>
            </div>

            {/* CTA */}
            <div data-aos="fade-up">
              <div className="bg-[#ffffff15] border border-white/10 rounded-4xl px-6 py-10 md:p-12 flex flex-col items-center text-center gap-6">
                <TitleWrapper
                  section="Niste sigurni šta vam treba?"
                  title="Javite se za besplatnu procjenu"
                  align="center"
                />
                <p className="text-gray-300 text-sm md:text-lg max-w-2xl">
                  Opišite nam šta želite očistiti i mi ćemo vam predložiti
                  najpovoljniju opciju – brzo, profesionalno i bez obaveze.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
                  >
                    Rezerviši termin
                  </button>
                  <a
                    href="tel:+38765302999"
                    className="flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
                  >
                    <FaPhone size={16} />
                    065/302-999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
