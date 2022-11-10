import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const RepairShop = () => {
  const { technicians, handleOtherTechnicians } = useGlobalContext();
  return (
    <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 p-10 xl:mx-40">
      {technicians.map((technician) => {
        return (
          <div
            className="rounded-sm shadow-lg shadow-[#B95E09] bg-white max-w-sm grid place-items-center m-4 pb-4 "
            key={technician.id}
          >
            <img src={technician.imageUrl} alt="" className="h-[250px]  " />

            <div className="p-6">
              <h5 className="text-[#B95E09] text-center  text-xl font-medium mb-2">
                {technician.name}
              </h5>
              <h5 className="text-center font-bold">
                Located at: {technician.shopLocation}
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                {technician.description}
              </p>
            </div>
            <button  onClick={()=>handleOtherTechnicians(technician.id)}className="w-32 h-16 text-xl border-2 border-black">
              <Link to={`/RepairShop/${technician.id}`}>Visit Shop</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RepairShop;
