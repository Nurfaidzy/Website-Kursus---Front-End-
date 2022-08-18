import React from "react";
import { useState } from "react";
import Aktor from "./../Img/meganglaptop.png";

export default function Jumbotron() {
  const [ganti, setGanti] = useState(false);
  const diganti = () => {
    setGanti(true);
  };

  return (
    <>
      <div className="px-[10%] h-screen text-[#F0F4F8] ">
        <div className="flex justify-between">
          <div className="2xl:w-[50%] w-[100%] h-full">
            <div className="font-bold text-[70px] pt-[25%] 2xl:pt-[35%]    ">
              <h1>Discover a new way</h1>
              <div className="flex gap-5">
                <h1>of</h1>
                <h1>
                  <div className="bg-[#FB8D7C]">Learning</div>
                </h1>
              </div>
            </div>
            <div className="pt-[6%] text-[22px]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="pt-[6%] static">
              <div className="bg-[#F0F4F8] w-full p-4 flex  ">
                <input
                  type="text"
                  placeholder="Type Here"
                  className={
                    ganti
                      ? "bg-[#F0F4F8] w-full text-black "
                      : "bg-[#F0F4F8] w-full "
                  }
                  onClick={diganti}
                />
                <button className="bg-[#6963f4] py-3 px-10">Search</button>
              </div>
            </div>
          </div>
          <div className="pt-[10%] ">
            <img
              src={Aktor}
              alt="aktor"
              className="2xl:w-[565px] w-[580px] 2xl:-ml-[30%] bg-local"
            />
          </div>
        </div>
      </div>
    </>
  );
}
