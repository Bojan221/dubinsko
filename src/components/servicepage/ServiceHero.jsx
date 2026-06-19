import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import heroImg from "../../images/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceHero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById("usluge");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-[420px] lg:min-h-[520px] flex relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.82) 55%, rgba(0, 0, 0, 0.55) 100%), url(${heroImg})`,
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex items-center py-16 md:py-20">
        <div className="max-w-2xl" data-aos="fade-right">
          <h5 className="uppercase text-blue-500 text-lg md:text-xl font-semibold tracking-wide mb-3">
            Naše usluge
          </h5>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-tight">
            Šta sve <span className="text-blue-500">nudimo?</span>
          </h1>

          <div className="w-24 h-1 bg-blue-500 mb-6"></div>

          <p className="text-gray-300 text-sm md:text-lg mb-8 leading-relaxed">
            Profesionalno dubinsko čišćenje za vozila, namještaj i tepihe.
            Upoznajte naše usluge i saznajte kako možemo pomoći u održavanju
            čistoće i svježine vašeg prostora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center cursor-pointer gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
            >
              <FaCalendarDays size={18} />
              Rezerviši termin
            </button>

            <button
              onClick={scrollToServices}
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
            >
              Pogledaj usluge
              <FaChevronDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
