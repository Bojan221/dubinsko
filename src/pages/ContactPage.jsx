import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactHero from "../components/contactpage/ContactHero";
import ContactForm from "../components/contactpage/ContactForm";
import TitleWrapper from "../components/homepage/TitleWrapper";
import wallpaper from "../images/wallpaper.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const infoBoxes = [
    {
      icon: <FaPhoneAlt />,
      title: "Telefon",
      lines: ["065/302-999"],
      href: "tel:+38765302999",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      lines: ["info@dubinsko-nl.ba"],
      href: "mailto:info@dubinsko-nl.ba",
    },
    {
      icon: <FaLocationDot />,
      title: "Lokacija",
      lines: ["Patkovača, Bijeljina", "Bosna i Hercegovina"],
    },
    {
      icon: <FaClock />,
      title: "Radno vrijeme",
      lines: ["Pon – Sub: 08–20h", "Nedjelja: po dogovoru"],
    },
  ];

  const socials = [
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  ];

  return (
    <div>
      <ContactHero />

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/85"></div>

        <div className="relative z-10 w-[95%] sm:w-[90%] md:w-[80%] mx-auto py-12 lg:py-16 flex flex-col gap-12">
          {/* info boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoBoxes.map((box, index) => {
              const content = (
                <>
                  <div className="rounded-2xl bg-blue-600/20 border border-blue-600/40 p-4 text-blue-500 text-2xl transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6">
                    {box.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold transition-colors duration-300 group-hover:text-blue-400">
                    {box.title}
                  </h3>
                  <div className="flex flex-col gap-0.5">
                    {box.lines.map((line, i) => (
                      <span
                        key={i}
                        className={
                          i === 0
                            ? "text-gray-200 text-sm md:text-base"
                            : "text-gray-400 text-xs md:text-sm"
                        }
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </>
              );

              const classes =
                "group bg-[#ffffff15] border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#ffffff20] hover:border-blue-600/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10";

              return box.href ? (
                <a
                  key={box.title}
                  href={box.href}
                  className={classes}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={box.title}
                  className={classes}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* map + form */}
          <div>
            <TitleWrapper
              section="pišite nam"
              title="Pošaljite nam poruku"
              align="center"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-4">
              {/* map */}
              <div
                className="rounded-3xl overflow-hidden border border-white/10 min-h-87.5 lg:min-h-full"
                data-aos="fade-right"
              >
                <iframe
                  title="Lokacija – Bijeljina"
                  src="https://www.google.com/maps?q=Bijeljina,+Bosna+i+Hercegovina&output=embed"
                  className="w-full h-full min-h-87.5"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>

              {/* form */}
              <ContactForm />
            </div>
          </div>

          {/* socials */}
          <div
            className="flex flex-col items-center gap-5 pt-2"
            data-aos="fade-up"
          >
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              Pratite nas
            </h3>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-[#ffffff15] border border-white/10 flex items-center justify-center text-white text-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
