import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };

  return (
    <div className=" h-screen  bg-slate-200 flex items-center justify-center">
      <div className="flex w-1/2  min-h-[600px] rounded-md overflow-hidden">
        <div className=" flex-1 p-12 bg-slate-400 flex flex-col gap-7 text-white ">
          <h1 className=" text-8xl leading-[100px] font-medium">The Will. </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus quasi ea deleniti facilis vitae maxime, maiores, dolor
            debitis voluptatum.
          </p>
          <span className=" text-s "> Don't you have an account?</span>
          <Link to="/register">
            {" "}
            <button className="w-1/2 p-2 bg-white text-slate-500 rounded-md font-bold ">
              Register
            </button>
          </Link>
        </div>
        <div className="flex-1 bg-white p-14 flex flex-col  gap-14 ">
          <h1 className="text-3xl font-semibold text-gray-400 ">Login</h1>
          <form className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Username"
              className=" border-b-2 p-5"
            />
            <input
              type="password"
              placeholder="Password"
              className=" border-b-2 p-5"
            />
            <button
              className="w-1/2 p-2 bg-gray-400 font-bold text-white rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
