import React from "react";
import Navbar from "../components/Navbar"

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center mx-10 mt-6 mb-2 font-medium ">
          <h1 className="text-4xl logo font-extrabold text-blue-500"><span className="font-medium text-5xl italic mr-1">H</span>endri.</h1>
          <Navbar />
      </header>
    </>
  )
}

export default Header;