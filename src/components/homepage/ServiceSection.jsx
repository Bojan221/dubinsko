import React from 'react'
import TitleWrapper from "./TitleWrapper";
import { PiArmchairFill } from "react-icons/pi";
import { FaMattressPillow } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";

function ServiceSection() {
    const services = [
        {
            icon:<FaCar/>,
            title:"Dubinsko čišćenje vozila", 
            description:"Kompletno čišćenje enterijera auta, sjedišta, tepiha, plastike i svih detalja."
        },
        {
            icon:<PiArmchairFill/>,
            title:"Dubinsko čišćenje namještaja", 
            description:"Uklanjamo mrlje, mirise i bakterije sa svih vrsta tapaciranog namještaja."
        },
        {
            icon:<FaMattressPillow/>,
            title:"Madraci i tepisi", 
            description:"Higijensko pranje i dezinfekcija za zdraviji dom bez prašine."
        },
        {
            icon:<BsHouseFill/>,
            title:"Čišćenje po pozivu", 
            description:"Dolazimo na Vašu adresu u dogovoreno vrijeme, brzo i efikasno."
        }
    ]


  return (
    <div>
      <TitleWrapper section="usluge" title="Šta nudimo?" align="center"/>
    </div>
  )
}

export default ServiceSection
