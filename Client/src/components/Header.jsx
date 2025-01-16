import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-md md:text-xl flex flex-wrap">
            <span className="text-slate-500">Jeeva</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 text-slate-800 ">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline">Home</li>{" "}
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to={"/signin"}>
            <li className="hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
