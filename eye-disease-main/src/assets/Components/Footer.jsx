import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className="bg-[#1F2937] text-gray-500 lg:px-32 px-10 py-8">
      <div>
        <div className="grid md:grid-cols-3 border-b-2 pb-5">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <i className="fa-regular fa-eye text-blue-500"></i>
              <p className="text-white">VisionAI</p>
            </li>
            <li>
              <p className="text-base">
                Revolutionizing eye disease detection through artificial
                intelligence.
              </p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-white text-lg">Quick Links</li>
            <Link onClick={()=>scrollTo(0,0)} to='/about'>About Us</Link>
            <Link onClick={()=>scrollTo(0,0)} to='/services'>Services</Link>
            <Link onClick={()=>scrollTo(0,0)} to='/contact'>Contact</Link>
            <Link onClick={()=>scrollTo(0,0)} to='/faq'>FAQ</Link>
          </ul>
          <ul>
            <li className="text-white text-lg">Contact</li>
            <li>contact@visionai.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
        <div className="py-8 text-center">
          <p>© 2024 VisionAI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
