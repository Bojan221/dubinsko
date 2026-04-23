import React from "react";

function TitleWrapper({ section, title, align }) {
  return (
    <div
      className={`flex flex-col gap-2 md:gap-3 py-7  ${align === "center" ? "items-center" : "items-start"}`}
    >
      <h5 className="uppercase text-blue-600 text-xl md:text-2xl font-semibold">
        {section}
      </h5>
      <h2 className="text-white text-[36px] md:text-[48px] font-semibold text-center">
        {title}
      </h2>
      <span className="border-b-4 border-blue-600 mt-2 w-50"></span>
    </div>
  );
}

export default TitleWrapper;
