import heroImg from "../../images/hero.png";
import { FaCheck, FaPhone } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { FaChevronDown } from "react-icons/fa";

function HeroSection() {
  const isDesktop = useMediaQuery({
    query: "(min-width:1024px)",
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="min-h-150 lg:h-165 flex relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.6) 100%), url(${heroImg})`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex justify-between py-15">
          {/* title */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                Dubinsko
                <br />
                <span className="text-blue-500">čišćenje NL</span>
              </h1>

              <div className="w-24 h-1 bg-blue-500 mb-6"></div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Profesionalno čišćenje vozila i namještaja za zdraviji, svježiji
                i ljepši prostor.
              </p>
            </div>

            {/* features  */}
            <div className="flex gap-4 mb-10 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaCheck color="white" size={14} />
                </div>
                <span className="text-white/90 font-medium">
                  Dolazimo na adresu
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaCheck color="white" size={14} />
                </div>
                <span className="text-white/90 font-medium">Brzo sušenje</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaCheck color="white" size={14} />
                </div>
                <span className="text-white/90 font-medium">
                  Zadovoljstvo garantovano
                </span>
              </div>
            </div>
            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-sm:px-15">
              <button className="flex items-center justify-center cursor-pointer gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-600/30">
                <FaPhone size={18} />
                <div className="text-left">
                  <div>Pozovi odmah</div>
                  <div className="text-sm opacity-80">065/302-999</div>
                </div>
              </button>

              <button className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300">
                Pogledaj usluge
                <FaChevronDown color="white" size={18} />
              </button>
            </div>
          </div>

          {/* discount */}
          {isDesktop && (
            <div className="flex justify-end items-end">
              <div className="w-40 h-40 rounded-full border-dotted border-4 border-blue-600 flex flex-col items-center justify-center bg-blue-600/20 backdrop-blur-md shadow-xl">
                <div className="text-4xl font-bold text-blue-500">20%</div>
                <div className="text-white font-semibold text-center mt-2 text-sm">
                  POPUSTA
                  <br />
                  do kraja aprila!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
