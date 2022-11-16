import React from "react";
import { useGlobalContext } from "../Context";
import { auth } from "../config/firebaseConfig";

const Customer = () => {
  const { customers } = useGlobalContext();
  return (
    <div>
      <h2 className="text-[#B95E09] text-3xl font-bold text-center">
        Welcome {auth.currentUser?.displayName}
      </h2>
      <h2 className="text-black text-2xl font-bold text-center">
        Your appliance has been posted
      </h2>
      <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 md:mx-60 mx-10">
        {customers.map((customer) => {
          return (
            <div
              className="rounded-lg  bg-white max-w-sm grid place-items-center m-4 p-2 "
              key={customer.id}
            >
              <div className="rounded shadow-sm shadow-[#B95E09] w-[90%]">
                <img src={customer.imageUrl} className="h-[300px] w-[300px]" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">
                    Reuse
                  </div>
                  <p className="text-gray-700 text-base">
                    {customer.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customer;
