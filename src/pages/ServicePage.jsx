import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";
import { FaMattressPillow } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import ServiceHero from "../components/servicepage/ServiceHero";
import ServiceDetailRow from "../components/servicepage/ServiceDetailRow";
import TitleWrapper from "../components/homepage/TitleWrapper";
import wallpaper from "../images/wallpaper.png";
import serviceImg from "../images/ContactUsBackground.png";

function ServicePage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaCar />,
      title: "Dubinsko čišćenje vozila",
      description:
        "Uklanjanje tvrdokornih mrlja, prašine, bakterija i neugodnih mirisa iz unutrašnjosti vašeg automobila.",
      bullets: [
        "Dubinsko čišćenje sjedala, tepiha, tapaciranih dijelova i ventilacionog sistema.",
        "Dezinfekcija i osvježavanje zraka kako bi vaš automobil bio higijenski čist i mirisan.",
      ],
      image: serviceImg,
    },
    {
      icon: <PiArmchairFill />,
      title: "Dubinsko čišćenje namještaja",
      description:
        "Temeljito i bezbjedno čišćenje vašeg namještaja – sofa, fotelja, stolica i drugih tapaciranih površina.",
      bullets: [
        "Uklanjanje prašine, mrlja i alergena čineći vaš namještaj svježim, sigurnim i udobnim za korištenje.",
        "Produženje vijeka trajanja vašeg namještaja uz obnovu izgleda i higijene.",
      ],
      image: serviceImg,
    },
    {
      icon: <FaMattressPillow />,
      title: "Madraci i tepisi",
      description:
        "Dubinsko čišćenje madraca za uklanjanje grinja, bakterija i alergena, za zdraviji san.",
      bullets: [
        "Temeljito pranje i čišćenje tepiha svih veličina i materijala.",
        "Učinkovito uklanjanje mrlja, neugodnih mirisa i tvrdokornih prljavština.",
      ],
      image: serviceImg,
    },
    {
      icon: <BsHouseFill />,
      title: "Čišćenje po pozivu",
      description:
        "Brze i efikasne usluge čišćenja tepiha, madraca, namještaja ili automobila na vašoj lokaciji.",
      bullets: [
        "Idealno za poslovne prostore, evente ili specifične potrebe za dubinskim čišćenjem.",
        "Dolazak na vašu adresu sa svom potrebnom opremom za dubinsko čišćenje.",
      ],
      image: serviceImg,
    },
  ];

  return (
    <div>
      <ServiceHero />

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/85"></div>

        <div className="relative z-10">
          <div
            id="usluge"
            className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col gap-16 lg:gap-24 py-12 lg:py-20"
          >
            {services.map((service, index) => (
              <ServiceDetailRow
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>

          {/* closing CTA */}
          <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto pb-16">
            <div className="bg-[#ffffff15] border border-white/10 rounded-4xl px-6 py-10 md:p-12 flex flex-col items-center text-center gap-6">
              <TitleWrapper
                section="Spremni za čišćenje?"
                title="Zakažite svoj termin već danas"
                align="center"
              />
              <p className="text-gray-300 text-sm md:text-lg max-w-2xl">
                Kontaktirajte nas i mi ćemo se pobrinuti da vaš prostor zasija –
                brzo, profesionalno i uz zagarantovano zadovoljstvo.
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
  );
}

export default ServicePage;
