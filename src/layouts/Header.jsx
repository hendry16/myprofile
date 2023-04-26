import React, { useState } from "react";
import Navbar from "../components/Navbar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <header className="flex justify-between items-center md:mx-10 md:mt-6 md:mb-0 font-medium bg-gray-100 h-[100px] md:h-[138px] md:bg-inherit mx-0 mt-0 mb-0"> */}
      <header className="flex sm:justify-between justify-center mx-6 items-center mt-6">
        <h1 className="hidden sm:block text-4xl logo font-extrabold ml-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-600">Hendri.</h1>
        {/* <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="mr-6 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" >
            <svg className={`w-10 h-10 ${isOpen ? "hidden" : ""}`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg className={`w-10 h-10 ${isOpen ? "" : "hidden"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div> */}
        <Navbar btn={isOpen} />
      </header>


    </>
  )
}

export default Header;