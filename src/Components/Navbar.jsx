import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="absolute">
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
    </>
  );
}
