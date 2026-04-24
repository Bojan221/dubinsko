import React from "react";
import TitleWrapper from "./TitleWrapper";
import ReservationForm from "./ReservationForm";
function InfoSection() {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto grid grid-cols-12">
      <ReservationForm/>
      <div></div>
      <div></div>
    </div>
  );
}

export default InfoSection;
