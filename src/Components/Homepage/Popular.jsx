import React from "react";
import {
  FcBusiness,
  FcMms,
  FcKindle,
  FcLandscape,
  FcPortraitMode,
  FcVideoCall,
  FcSportsMode,
  FcTimeline,
  FcViewDetails,
} from "react-icons/fc";

export default function Popular() {
  return (
    <>
      <div className="bg-[#F0F4F8] font-[#051b34] px-[10%] py-[5%]">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-[23px] md:text-[34px]  ">
              Popular Topics
            </h1>
          </div>
          <div className="pt-2 md:pt-4">
            <a
              href=""
              className="btn bg-[#6963F4] text-[18px] px-4 py-2 md:px-6 md:py-4  text-[#F0F4F8]"
            >
              Show All
            </a>
          </div>
        </div>
        <div className="flex justify-center pt-5 md:pt-10 -ml-10 md:-ml-0 ">
          <div className="grid grid-cols-3 md:grid-cols-5 2xl:gap-8 md:gap-4 2xl:text-lg text-sm">
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcBusiness className="2xl:text-4xl text-2xl bg-slate-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2 ">Business</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcMms className="2xl:text-4xl text-2xl bg-red-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">Design </p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcKindle className="2xl:text-4xl text-2xl bg-slate-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">Marketing</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcLandscape className="2xl:text-4xl text-2xl bg-green-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">Photography</p>
                </div>
              </div>
            </div>
            <div className="px-10  ">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcPortraitMode className="2xl:text-4xl text-2xl bg-indigo-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2"> Animation</p>
                </div>
              </div>
            </div>
            {/* sdsd */}
            <div className="px-10 ">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcVideoCall className="2xl:text-4xl text-2xl bg-green-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">Film</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcSportsMode className="2xl:text-4xl text-2xl bg-orange-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">Illustration</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcTimeline className="2xl:text-4xl text-2xl bg-blue-300 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">UI/UX</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 2xl:py-6 py-4 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <div className="pt-1 2xl:pt-0">
                    <FcViewDetails className="2xl:text-4xl text-2xl bg-blue-200 p-1 rounded-xl" />
                  </div>
                  <p className="px-2 pt-2">Design </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
