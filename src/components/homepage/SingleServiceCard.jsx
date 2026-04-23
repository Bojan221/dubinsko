import React from "react";

function SingleServiceCard({ service, ...props }) {
  return (
    <div
      className="bg-[#ffffff15] rounded-4xl flex flex-col justify-between items-center gap-4 md:gap-5 p-5 md:p-8"
      {...props}
    >
      <div className="rounded-full border-3 border-white p-5 bg-[#00000070]">
        {" "}
        <span className="text-blue-800 text-[60px] md:text-[96px] ">
          {" "}
          {service.icon}{" "}
        </span>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-semibold text-center">
        {service.title}
      </h3>
      <p className="text-white text-sm md:text-md text-center">
        {service.description}
      </p>
    </div>
  );
}

export default SingleServiceCard;
