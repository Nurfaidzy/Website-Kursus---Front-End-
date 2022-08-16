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
            <h1 className="font-bold text-[34px]">Popular Topics</h1>
          </div>
          <div className="pt-4">
            <a
              href=""
              className="btn bg-[#6963F4] text-[18px] px-6 py-4  text-[#F0F4F8]"
            >
              Show All
            </a>
          </div>
        </div>
        <div className="flex justify-center pt-10 ">
          <div className="grid grid-cols-5 gap-8 ">
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcBusiness className="text-4xl bg-slate-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2">Business</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcMms className="text-4xl bg-red-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2">Design </p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcKindle className="text-4xl bg-slate-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2">Marketing</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcLandscape className="text-4xl bg-green-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2">Photography</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcPortraitMode className="text-4xl bg-indigo-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2"> Animation</p>
                </div>
              </div>
            </div>
            {/* sdsd */}
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcVideoCall className="text-4xl bg-green-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2">Film</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcSportsMode className="text-4xl bg-orange-200 p-1 rounded-xl" />
                  <p className="px-2 pt-2">Illustration</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcTimeline className="text-4xl bg-blue-300 p-1 rounded-xl" />
                  <p className="px-2 pt-2">UI/UX</p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-[#F0F4F8] shadow-sm hover:shadow-lg  flex justify-center px-10 py-6 rounded-lg ">
                <div className=" text-center flex justify-center font-bold ">
                  <FcViewDetails className="text-4xl bg-blue-200 p-1 rounded-xl" />
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
