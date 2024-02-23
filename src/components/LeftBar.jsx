import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";

const LeftBar = () => {
  return (
    <div className="leftBar w-[20%] sticky top-[72px] h-[calc(100vh-72px)] overflow-scroll scrollbar no-scrollbar">
      <div className="container p-5">
        <div className="menu flex flex-col gap-5">
          <div className="user flex items-center gap-2">
            <img
              src="https://w0.peakpx.com/wallpaper/307/696/HD-wallpaper-ichigo-bleach-bleach.jpg"
              alt=""
              className=" w-8 h-8 rounded-full object-cover"
            />
            <span className=" text-[14px]">Nikhil</span>
          </div>
          <div className=" flex items-center gap-2">
            <img src={Friends} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Friends</span>
          </div>
          <div className=" flex items-center gap-2">
            <img src={Groups} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Groups</span>
          </div>
          <div className=" flex items-center gap-2">
            <img src={Market} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Market</span>
          </div>
          <div className=" flex items-center gap-2">
            <img src={Watch} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Watch</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Memories} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Memories</span>
          </div>
        </div>
        <hr className="my-5 h-[0.5px] border-none bg-gray-300 " />
        <div className="menu flex flex-col gap-5">
          <span className=" text-xs">Your Shortcuts</span>
          <div className="flex items-center gap-2">
            <img src={Events} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Events</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Gaming} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Gaming</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Gallery} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Gallery</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Videos} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Messages} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Messages</span>
          </div>
        </div>
        <hr className="my-5 h-[0.5px] border-none bg-gray-300 " />
        <div className="menu flex flex-col gap-5">
          <span className=" text-xs">Others</span>
          <div className="flex items-center gap-2">
            <img src={Fund} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Fundraiser</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Tutorials} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Tutorials</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Courses} alt="" className="w-8 h-8" />
            <span className=" text-[14px]">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
