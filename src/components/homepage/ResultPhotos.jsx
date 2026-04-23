import TitleWrapper from "./TitleWrapper";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ResultPhotos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  const images = [
    slide1,
    slide2,
    slide3,
    slide1,
    slide2,
    slide3,
    slide1,
    slide2,
    slide3,
  ];

  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    AOS.refresh();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 py-5">
      <TitleWrapper
        section={"Galerija"}
        title={"Naši rezultati govore više od riječi"}
        align={"center"}
      />
      <div data-aos="zoom-in" data-aos-duration="1500">
        <Swiper
          slidesPerView={isMobile ? 1 : 2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${(index % 3) + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openModal(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/97 overflow-hidden"
            onClick={closeModal}
            style={{ zIndex: 9998 }}
          ></div>
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            onClick={closeModal}
            style={{ zIndex: 9999 }}
          >
            <img
              src={selectedImage}
              alt="Modal"
              className="max-w-[80%] max-h-[80%] object-contain rounded-lg"
              data-aos="zoom-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ResultPhotos;
