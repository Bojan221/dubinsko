import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

function FooterComponent() {
  const fastLinks = [
    { label: "Pocetna", value: "home" },
    { label: "Usluge", value: "services" },
    { label: "Galerija", value: "gallery" },
    { label: "Cjenovnik", value: "prices" },
    { label: "Kontakt", value: "contact" }
  ];

  const services = [
    "Ciscenje vozila",
    "Ciscenje namjestaja",
    "Madraci i tepisi",
    "Ciscenje po pozivu"
  ];

  return (
    <>
    <div className='w-[95%] sm:w-[90%] md:w-[80%] mx-auto py-6 flex flex-col'>
      <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-30'>

        {/* LEFT */}
        <div className='flex flex-col items-center gap-4'>
          <img src={logo} alt="logo" className='w-auto h-25' />
          <p className='text-sm text-gray-500 text-center  max-w-62.5'>
            Profesionalno ciscenje vozila i namjestaja za vas zdraviji i ljepsi prostor
          </p>
        </div>

        {/* RIGHT */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full'>

          {/* Brzi linkovi */}
          <div className='flex flex-col gap-4 max-sm:items-center'>
            <span className='text-white font-semibold text-lg'>Brzi linkovi</span>
            <ul className='flex flex-col gap-1 text-gray-500 font-medium text-sm max-sm:text-center'>
              {fastLinks.map((link) => (
                <li key={link.label}>
                  <Link to={`/${link.value}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Usluge */}
          <div className='flex flex-col gap-4 max-sm:items-center'>
            <span className='text-white font-semibold text-lg'>Usluge</span>
            <ul className='flex flex-col gap-1 text-gray-500 font-medium text-sm max-sm:text-center'>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className='flex flex-col gap-4 max-sm:items-center'>
            <span className='text-white font-semibold text-lg'>Kontakt</span>
            <div className='flex flex-col gap-2 text-gray-500 font-medium text-sm'>
              <div className='flex items-center gap-2 max-sm:justify-center'>
                <FiPhone size={18} />
                <p>065/302-999</p>
              </div>
              <div className='flex items-center gap-2 max-sm:justify-center'>
                <IoLocationOutline size={18} />
                <p>Patkovaca, Bijeljina</p>
              </div>
              <div className='flex items-center gap-2 max-sm:justify-center'>
                <FaInstagram size={18} />
                <p>@dubinsko_ciscenje_nl</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
      <div className='bg-gray-800 text-gray-500 font-medium max-md:text-sm py-5 md:py-8'>
        <p className='text-center'>&copy; 2026 Dubinsko ciscenje NL. Sva prava zadrzana.</p>
      </div>
    </>
  )
}

export default FooterComponent;