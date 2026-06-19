import { useState, useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleSend = () => {
    if (!name.trim()) {
      toast.error("Unesi ime");
      return;
    }
    if (!lastName.trim()) {
      toast.error("Unesi prezime");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Unesi ispravan email");
      return;
    }
    if (!subject.trim()) {
      toast.error("Unesi temu");
      return;
    }
    if (!message.trim()) {
      toast.error("Unesi poruku");
      return;
    }

    const templateParams = {
      name: `${name} ${lastName}`,
      email,
      subject,
      message,
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
          toast.success("Poruka uspješno poslana!");
          setName("");
          setLastName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        () => {
          toast.error("Greška pri slanju. Pokušaj ponovo.");
        },
      );
  };

  const inputClass =
    "bg-[#ffffff15] rounded-lg text-gray-200 py-2.5 px-3 w-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400";

  return (
    <div
      className="flex flex-col gap-4 bg-[#ffffff10] border border-white/10 rounded-3xl p-6 md:p-8"
      data-aos="fade-left"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-gray-200 text-sm font-medium">Ime</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vaše ime"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-gray-200 text-sm font-medium">Prezime</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Vaše prezime"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-gray-200 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vas@email.com"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-gray-200 text-sm font-medium">Tema</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Tema poruke"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-gray-200 text-sm font-medium">Opis</label>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Opišite vaš upit..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        onClick={handleSend}
        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex justify-center items-center gap-3"
      >
        Pošalji <FaTelegramPlane />
      </button>
    </div>
  );
}

export default ContactForm;
