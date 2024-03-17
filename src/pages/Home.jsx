import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import Stories from "../components/Stories";
import Post from "../components/Post";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={` ${darkMode && "bg-gray-700"}`}>
      <Stories />
      <Post />
    </div>
  );
};

export default Home;
