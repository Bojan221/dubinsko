import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css"

function HeaderComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const router = useNavigate();

  const isDesktop = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const isSmallMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 250 && !showSticky) {
        setShowSticky(true);
      }

      if (scrollY < 350 && showSticky) {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSticky]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowMenu(false);
      setIsClosing(false);
    }, 400);
  };

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          `font-semibold transition-all duration-300 border-b-2 py-2 ${
            isActive
              ? "text-blue-600 border-blue-600"
              : "text-gray-300 border-transparent"
          }`
        }
        to="/"
      >
        Početna
      </NavLink>

      <NavLink className="font-semibold text-gray-300 py-2" to="/services">
        Usluge
      </NavLink>

      <NavLink className="font-semibold text-gray-300 py-2" to="/gallery">
        Galerija
      </NavLink>

      <NavLink className="font-semibold text-gray-300 py-2" to="/prices">
        Cjenovnik
      </NavLink>

      <NavLink className="font-semibold text-gray-300 py-2" to="/contact">
        Kontakt
      </NavLink>
    </>
  );

  const headerContent = (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex items-center justify-between">
      <img
        src={logo}
        alt="logo"
        className="w-auto h-8 sm:h-10 lg:h-15 cursor-pointer"
        onClick={() => router("/")}
      />

      {isDesktop && <div className="flex items-center gap-6">{navLinks}</div>}

      {isDesktop && (
        <button className="flex items-center gap-2 rounded-md bg-blue-600 cursor-pointer text-white px-4 py-2 font-semibold">
          <FaCalendarDays color="white" />
          Rezerviši termin
        </button>
      )}

      {!isDesktop && (
        <IoMenuOutline
          color="white"
          size={isSmallMobile ? 36 : 48}
          onClick={() => setShowMenu(true)}
        />
      )}
    </div>
  );

  return (
    <>
      {/* normal */}
      <div className="bg-black py-3 shadow-md" data-aos="fade-down">
        {headerContent}
      </div>

      {/* sticky */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-transform py-3 duration-300 ease-in-out ${
          showSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {headerContent}
      </div>

      {/* MOBILE MENU */}
      {showMenu && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#00000090] flex justify-end z-50 ${
            isClosing ? "fade-out" : "fade-in"
          }`}
          onClick={() => handleCloseMenu()}
        >
          <div
            className={`h-full w-[80%] sm:w-[60%] md:w-[50%] bg-black shadow-xl flex flex-col ${
              isClosing ? "slide-out-right" : "slide-in-right"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-white text-lg font-semibold">MENI</h2>
              <IoClose
                color="white"
                size={32}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => handleCloseMenu()}
              />
            </div>

            <nav className="flex flex-col gap-0 p-6 text-sm">
              {["/", "/services", "/gallery", "/prices", "/contact"].map(
                (path, i) => (
                  <NavLink
                    key={i}
                    to={path}
                    onClick={() => handleCloseMenu()}
                    className={({ isActive }) =>
                      `font-semibold py-4 px-4 rounded transition-all duration-300 ${
                        isActive
                          ? "text-blue-600 bg-gray-900 border-l-4 border-blue-600"
                          : "text-gray-300 hover:text-white hover:bg-gray-900"
                      }`
                    }
                  >
                    {
                      ["Početna", "Usluge", "Galerija", "Cjenovnik", "Kontakt"][
                        i
                      ]
                    }
                  </NavLink>
                ),
              )}
            </nav>

            <div className="mt-auto p-6">
              <button className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 font-semibold transition-colors duration-300">
                <FaCalendarDays color="white" />
                Rezerviši termin
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
