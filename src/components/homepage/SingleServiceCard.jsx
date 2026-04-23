import React from "react";

function SingleServiceCard({ service }) {
  return (
    <div className="bg-gray-600 rounded-lg flex flex-col justify-between items-center gap-3 py-5">
      <div className="rounded-full border-2 border-white p-6">
        {" "}
        <span className="text-blue-800 text-[96px]"> {service.icon} </span>
      </div>
    </div>
  );
}

export default SingleServiceCard;
