import { useEffect } from "react";
import heroImg from "../../images/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactHero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div
      className="min-h-[300px] lg:min-h-[360px] flex relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.82) 55%, rgba(0, 0, 0, 0.55) 100%), url(${heroImg})`,
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex items-center py-14">
        <div data-aos="fade-right">
          <h5 className="uppercase text-blue-500 text-lg md:text-xl font-semibold tracking-wide mb-3">
            Kontakt
          </h5>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Kontaktirajte <span className="text-blue-500">nas</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
