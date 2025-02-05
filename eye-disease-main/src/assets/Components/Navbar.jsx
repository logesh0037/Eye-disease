import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white">
      <nav className="flex items-center z-100 gap-2 justify-between px-6 py-4 md:px-12 md:py-5 relative">
        <div className="flex  text-lg gap-1 items-center">
          <i className="fa-regular fa-eye"></i>
          <h1 className="text-lg">VisionAI</h1>
        </div>
        <div className="md:flex gap-4 lg:gap-8 hidden font-light">
          <ul className="flex gap-2 lg:gap-5 items-center">
            <NavLink className="px-2 py-0.5 rounded-sm w-max" to="/">
              Home
            </NavLink>
            <NavLink className="px-2 py-0.5 rounded-sm w-max" to="/about">
              About
            </NavLink>
            <NavLink className="px-2 py-0.5 rounded-sm w-max" to="/services">
              Services
            </NavLink>
            <NavLink className="px-2 py-0.5 rounded-sm w-max" to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="px-2 py-0.5 rounded-sm w-max" to="/faq">
              FAQ
            </NavLink>
          </ul>
          <div>
            <Link
              to="/login"
              className="bg-blue-500 rounded-md text-white px-8 py-1 w-max"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="block md:hidden" onClick={() => setToggle(!toggle)}>
          <i className="fa-solid fa-bars"></i>
        </div>
          <div className={`absolute w-full  left-0 top-full py-2 block md:hidden  bg-white px-3 ${toggle?"translate-y-0 transition-transform duration-500":"transition-transform duration-500 -translate-y-100"}`}>
            <ul className="flex flex-col  gap-3 items-center">
              <NavLink onClick={()=>setToggle(!toggle)}
                className="px-2 py-1 rounded-sm border-b-1 border-gray-500 w-full text-center"
                to="/"
              >
                Home
              </NavLink>
              <NavLink  onClick={()=>setToggle(!toggle)}
                className="px-2 py-1 rounded-sm border-b-1 border-gray-500 w-full text-center"
                to="/about"
              >
                About
              </NavLink>
              <NavLink  onClick={()=>setToggle(!toggle)}
                className="px-2 py-1 rounded-sm border-b-1 border-gray-500 w-full text-center"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink  onClick={()=>setToggle(!toggle)}
                className="px-2 py-1 rounded-sm border-b-1 border-gray-500 w-full text-center"
                to="/contact"
              >
                Contact Us
              </NavLink>
              <NavLink  onClick={()=>setToggle(!toggle)}
                className="px-2 py-1 rounded-sm border-b-1 border-gray-500 w-full text-center"
                to="/faq"
              >
                FAQ
              </NavLink>
            </ul>
            <div onClick={()=>setToggle(!toggle)} className="mt-4 flex  text-center w-full bg-blue-500 rounded-md px-8 py-1">
              <Link to="/login" className="   text-white  " >
                Get Started  
              </Link>
            </div>
          </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
