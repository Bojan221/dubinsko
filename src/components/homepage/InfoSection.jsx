import React from "react";
import ReservationForm from "./ReservationForm";
import Packets from "./Packets";
import ServiceList from "./ServiceList";
function InfoSection() {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto grid grid-cols-12 gap-8">
      <ReservationForm />
      <Packets />
      <ServiceList />
    </div>
  );
}

export default InfoSection;
