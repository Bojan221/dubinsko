import TitleWrapper from "./TitleWrapper";
import { FaChevronDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ReservationForm() {
  const [optionsDropdown, setOptionsDropdown] = useState(false);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const serviceOption = [
    { label: "Dubinsko čišćenje vozila", value: "car" },
    { label: "Dubinsko čišćenje namještaja", value: "furniture" },
    { label: "Madraci i tepisi", value: "carpets" },
    { label: "Čišćenje po pozivu", value: "call" },
  ];

  const handleSend = () => {
    if (!service) {
      toast.error("Odaberi uslugu");
      return;
    }

    if (!date) {
      toast.error("Odaberi datum");
      return;
    }

    if (!time) {
      toast.error("Odaberi vrijeme");
      return;
    }

    if (!name.trim()) {
      toast.error("Unesi ime i prezime");
      return;
    }

    if (!phone.trim()) {
      toast.error("Unesi broj telefona");
      return;
    }

    if (phone.length < 6) {
      toast.error("Neispravan broj telefona");
      return;
    }

    const templateParams = {
      service,
      date,
      time,
      name,
      phone,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Zahtjev uspješno poslan!");

          setService("");
          setDate("");
          setTime("");
          setName("");
          setPhone("");
        },
        () => {
          toast.error("Greška pri slanju. Pokušaj ponovo.");
        },
      );
  };

  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="flex flex-col gap-4">
        <TitleWrapper
          section={"rezervisi termin"}
          title={"Odaberi svoj termin"}
        />

        <div className="flex flex-col w-full gap-3" data-aos="fade-left">
          <div className="relative w-full bg-[#ffffff15] rounded-lg text-gray-200">
            <span
              className="w-full flex justify-between items-center py-2.5 px-3 cursor-pointer"
              onClick={() => setOptionsDropdown(!optionsDropdown)}
            >
              {service || "Usluga"}{" "}
              <FaChevronDown
                size={16}
                className={`transition-all duration-200 ${optionsDropdown ? "rotate-180" : ""}`}
              />
            </span>
            {optionsDropdown && (
              <div className="absolute left-0 top-full mt-2 w-full bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                {serviceOption.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setService(item.label);
                      setOptionsDropdown(false);
                    }}
                    className="px-4 py-2.5 cursor-pointer text-gray-200 hover:bg-white/10 transition-all duration-150"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="bg-[#ffffff15] rounded-lg text-gray-200 py-2.5 px-3 w-1/2
    [&::-webkit-calendar-picker-indicator]:invert"
            />

            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
              className="bg-[#ffffff15] rounded-lg text-gray-200 py-2.5 px-3 w-1/2
    [&::-webkit-calendar-picker-indicator]:invert
    [&::-webkit-datetime-edit-fields-wrapper]:text-gray-200
    [&::-webkit-datetime-edit-text]:text-gray-200
    [&::-webkit-datetime-edit-hour-field]:text-gray-200
    [&::-webkit-datetime-edit-minute-field]:text-gray-200"
            />
          </div>

          <div>
            <input
              type="text"
              className="bg-[#ffffff15] rounded-lg text-gray-200 py-2.5 px-3 w-full"
              placeholder="Ime i prezime"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              className="bg-[#ffffff15] rounded-lg text-gray-200 py-2.5 px-3 w-full"
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div data-aos="fade-right">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex justify-center items-center gap-3"
            onClick={() => handleSend()}
          >
            Pošalji zahtjev <FaTelegramPlane />
          </button>
        </div>
        <span
          data-aos="fade-right"
          className="w-full text-center text-gray-200"
        >
          Javicemo vam se radi potvrde termina.
        </span>
      </div>
    </div>
  );
}

export default ReservationForm;
