import React from "react";

function TitleWrapper({ section, title, align }) {
  return (
    <div
      className={`flex flex-col gap-2 md:gap-3 py-7  ${align === "center" ? "items-center" : "items-start"}`}
    >
      <h5
        className={`uppercase text-blue-600 text-xl ${align === "center" ? "md:text-2xl" : "md-text-xl"} font-semibold`}
      >
        {section}
      </h5>
      <h2
        className={`text-white text-[36px] ${align === "center" ? "md:text-[48px] text-center" : "md:text-[32px] lg:w-[60%]"} font-semibold `}
      >
        {title}
      </h2>
      <span
        className={`border-b-4 border-blue-600 mt-2 ${align === "center" ? "w-50" : "w-25"}`}
      ></span>
    </div>
  );
}

export default TitleWrapper;
