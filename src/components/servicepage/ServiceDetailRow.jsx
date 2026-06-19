import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaCalendarDays } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceDetailRow({ service, index }) {
  const navigate = useNavigate();
  const reversed = index % 2 === 1;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      {/* text */}
      <div
        className={`flex flex-col gap-5 ${reversed ? "lg:order-2" : "lg:order-1"}`}
        data-aos={reversed ? "fade-left" : "fade-right"}
      >
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-600/20 border border-blue-600/40 p-4">
            <span className="text-blue-500 text-3xl md:text-4xl">
              {service.icon}
            </span>
          </div>
          <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
            {service.title}
          </h3>
        </div>

        <div className="w-20 h-1 bg-blue-600"></div>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
          {service.description}
        </p>

        <ul className="flex flex-col gap-4">
          {service.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 w-6 h-6 shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
                <FaCheck color="white" size={12} />
              </span>
              <span className="text-gray-200 text-sm md:text-base leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <div>
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center cursor-pointer gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
          >
            <FaCalendarDays size={16} />
            Rezerviši termin
          </button>
        </div>
      </div>

      {/* image */}
      <div
        className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
        data-aos={reversed ? "fade-right" : "fade-left"}
      >
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 sm:h-80 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailRow;
