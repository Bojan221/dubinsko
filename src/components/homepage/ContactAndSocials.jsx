import {useEffect} from "react";
import backgroundImage from "../../images/ContactUsBackground.png";
import TitleWrapper from "./TitleWrapper";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactAndSocials() {
  
  useEffect(()=> { 
    AOS.init({
      duration:1500,
      once:true
    })
  },[])
  
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-16 relative"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/30"></div>
      <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-4">
          <div data-aos="fade-right">
            <TitleWrapper
              section="imate pitanje?"
              title="Slobodno nas kontajtirajte"
              wfull
            />
            <span className="text-gray-200 font-medium text-md block w-[80%]">
              Brzo odgovaramo na sve upite i pomažemo Vam da odaberete najbolju
              uslugu za Vas.
            </span>
          </div>
          <div className="flex flex-col gap-2" data-aos="fade-up"> 
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ime"
                className="bg-[#00000095] rounded-lg text-gray-200 py-2.5 px-3 border border-white w-[35%] focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="bg-[#00000095] rounded-lg text-gray-200 py-2.5 px-3 w-[65%] border border-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Poruka"
              rows={4}
              className=" w-full bg-[#00000095] rounded-lg text-gray-200 py-2.5 px-3 border border-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="flex justify-center items-center gap-3 py-2.5 rounded-lg bg-blue-600 transition-all duration-200 hover:bg-blue-700 cursor-pointer text-white font-medium">
              Pošalji poruku <FaTelegramPlane />
            </button>
          </div>
          <div className="flex flex-col xl:ml-10 max-md:w-full gap-4 justify-between px-10 p-5 bg-[#00000065] rounded-lg" data-aos="fade-left">
            <div className="flex items-center justify-start gap-3 font-semibold text-2xl text-white"><FaPhoneAlt size={40} className="text-blue-600"/> <span>065/302-999</span></div>
            <div className="flex items-center justify-start gap-3 font-semibold text-2xl text-white"><FaLocationDot size={40} className="text-blue-600"/> <div className="flex flex-col gap-1"><span>Patkovaca, Bijeljina</span><span className="text-gray-200 text-sm">Bosna i Hercegovina</span></div></div>
            <div className="flex items-center justify-start gap-3 font-semibold text-2xl text-white"><RiInstagramFill size={40} className="text-blue-600"/> <div className="flex flex-col gap-1"><span>@dubinsko_ciscenje_nl</span ><span className="text-gray-200 text-sm">Pratite nas na Instagramu</span></div></div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAndSocials;
