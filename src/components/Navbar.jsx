import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between px-5 py-3 h-12 border-b-2 border-gray-100 border-solid sticky top-0 bg-white">
      <div className=" flex items-center gap-7">
        <Link to="/">
          <span className="font-bold text-xl text-slate-400">thewill.</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className=" flex items-center gap-2 border border-solid border-gray-400 rounded-md p-1">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="search..."
            className=" focus:outline-none w-96"
          />
        </div>
      </div>
      <div className="right flex items-center gap-5">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className=" flex items-center gap-2 font-semibold">
          <img
            src="https://w0.peakpx.com/wallpaper/307/696/HD-wallpaper-ichigo-bleach-bleach.jpg"
            alt=""
            className=" w-8 h-8 rounded-full object-cover"
          />
          <span>nik</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
