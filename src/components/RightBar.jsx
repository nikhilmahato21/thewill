import React from "react";

const RightBar = () => {
  return (
    <div className="w-[25%] sticky top-[72px] h-[calc(100vh-72px)] overflow-scroll scrollbar no-scrollbar">
      <div className="container p-5">
        <div className=" shadow-md rounded-xl p-5">
          <span className=" text-gray-400">Suggestions For You</span>
          <div className="user flex items-center justify-between my-5">
            <div className="userInfo flex items-center gap-5">
              <img
                src="https://w0.peakpx.com/wallpaper/307/696/HD-wallpaper-ichigo-bleach-bleach.jpg"
                alt=""
                className=" w-10 h-10 rounded-full object-cover"
              />
              <span className=" font-medium">Hell nik</span>
            </div>
            <div className="buttons flex items-center gap-2">
              <button className=" p-1 text-white bg-blue-500 ">follow</button>
              <button className=" p-1 text-white bg-red-500">dismiss</button>
            </div>
          </div>
          <div className="user flex items-center justify-between my-5">
            <div className="userInfo flex items-center gap-5">
              <img
                src="https://w0.peakpx.com/wallpaper/307/696/HD-wallpaper-ichigo-bleach-bleach.jpg"
                alt=""
                className=" w-10 h-10 rounded-full object-cover"
              />
              <span className=" font-medium">Hell nik</span>
            </div>
            <div className="buttons flex items-center gap-2">
              <button className=" p-1 text-white bg-blue-500">follow</button>
              <button className=" p-1 text-white bg-red-500">dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
