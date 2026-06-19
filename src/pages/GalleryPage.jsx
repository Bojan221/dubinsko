import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";
import { IoClose } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import GalleryHero from "../components/gallerypage/GalleryHero";
import TitleWrapper from "../components/homepage/TitleWrapper";
import wallpaper from "../images/wallpaper.png";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: slide1, title: "Dubinsko čišćenje sjedišta" },
  { src: slide2, title: "Pranje namještaja" },
  { src: slide3, title: "Čišćenje tepiha" },
  { src: slide1, title: "Enterijer vozila" },
  { src: slide2, title: "Madrac kao nov" },
  { src: slide3, title: "Dezinfekcija parom" },
  { src: slide1, title: "Detaljno čišćenje" },
  { src: slide2, title: "Svjež i čist prostor" },
  { src: slide3, title: "Rezultat po mjeri" },
];

function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const closeModal = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  return (
    <div>
      <GalleryHero />

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/85"></div>

        <div className="relative z-10">
          <div
            id="galerija"
            className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto py-12 lg:py-20 flex flex-col gap-6"
          >
            <TitleWrapper
              section="naš rad"
              title="Pogledajte naše rezultate"
              align="center"
            />

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                  className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white text-lg">
                      <FaSearchPlus />
                    </span>
                    <span className="px-4 text-center text-sm font-medium text-white">
                      {image.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeModal}
        >
          {/* close */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Zatvori"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-blue-600 cursor-pointer"
          >
            <IoClose size={26} />
          </button>

          <div
            className="w-[95%] sm:w-[85%] md:w-[75%] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Zoom]}
              initialSlide={activeIndex}
              navigation
              keyboard={{ enabled: true }}
              zoom
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              loop
              className="gallery-modal-swiper rounded-2xl"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="max-h-[80vh] w-full rounded-2xl object-contain"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm md:text-base font-medium text-gray-200">
                    {image.title}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
