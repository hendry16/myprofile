import { useEffect, useState } from 'react';
import { Router, Link, Switch, Route, BrowserRouter, useLocation, NavLink } from 'react-router-dom';

const Navbar = () => {

  const navLinkStyles = ({ isActive, isOpen }) => {
    let style = isActive ? "mx-2 h-20 w-20 text-white  bg-indigo-50 p-3 rounded-md bg-gradient-to-r from-orange-600 to-pink-600" : "mx-2 h-20 w-20 text-gray-600  bg-indigo-50 p-3 rounded-md hover:bg-gradient-to-r from-orange-600 to-pink-600 hover:text-white transition duration-300 peer-active:bg-black";
    return style;
  }

  return (
    // <Router>
    <div>
      <div className="items-center justify-end h-32 p-4 rounded-3xl mr-0 bg-white flex">
        {/* <NavLink to="/about"  style={navLinkStyles}> */}
        <NavLink to="/about" className={navLinkStyles}> 
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p className="text-center mt-2 text-sm">About</p>
          </a>
        </NavLink>
        <NavLink to="/resume" className={navLinkStyles}>
          <a href="" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
            <p className="text-center mt-2 text-sm">Resume</p>
          </a>
        </NavLink>
        <NavLink to="/contact" className={navLinkStyles}>
          <a href="" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p className="text-center mt-2 text-sm">Contact</p>
          </a>
        </NavLink>
        <NavLink to="/" className={navLinkStyles}>
          <a href="" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p className="text-center mt-2 text-sm">Home</p>
          </a>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;

