import React from "react";

import { AiFillAppstore } from "react-icons/ai";

export default function Navbar() {
  const [Navbar, setNavbar] = React.useState(false);

  const tap = () => {
    setNavbar(!Navbar);
  };
  return (
    <>
      <div className="sm:visible invisible ">
        <div className="fixed w-full ">
          <div className=" bg-[#051b34] flex justify-between px-[10%] py-[1%] text-[#F0F4F8] ">
            <div className="font-bold text-[34px]">
              <h1>E-Learning</h1>
            </div>
            <div className="flex justify-end gap-10 text-[18px] pt-2">
              <ol className="gap-8 flex justify-between pt-2">
                <li>Home</li>
                <li>Course</li>
                <li>Trainer Profile</li>
                <li>About Us</li>
                <li>Blog</li>
              </ol>
              <div>
                <ol className="flex justify-between gap-8 ">
                  <li className="pt-2">Login</li>
                  <li className="bg-[#F0F4F8] px-6 py-2 rounded-sm text-[#121c2c] font-bold">
                    Get Started
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:invisible visible  ">
        <div className="fixed w-full ">
          <div className=" bg-[#051b34] hover:border-b-2 flex justify-between px-[10%] py-[1%] text-[#F0F4F8] ">
            <div className="font-bold text-[34px]">
              <h1>E-Learning</h1>
            </div>
            <div className="pt-2">
              <AiFillAppstore
                className="text-[#F0F4F8] text-4xl "
                onClick={tap}
              />
            </div>
          </div>
          {Navbar ? (
            <div className="bg-[#051b34]  h-screen">
              <div className="flex justify-center text-[#F0F4F8] text-center">
                <ol className="text-4xl pt-4">
                  <li className="p-4 border-b-2">Home</li>
                  <li className="p-4 border-b-2">Course</li>
                  <li className="p-4 border-b-2">Trainer Profile</li>
                  <li className="p-4 border-b-2">About Us</li>
                  <li className="p-4 border-b-2">Blog</li>
                </ol>
              </div>
              <div>
                <div className="text-white text-center text-sm pt-[50%]">
                  on Created by nurf
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
