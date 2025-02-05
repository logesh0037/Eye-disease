import React from "react";
import doc1 from '../img/doc-1.jpeg';
import doc2 from '../img/doc-2.jpeg';
import doc3 from '../img/doc-3.jpeg';
import doc4 from '../img/doc-4.jpeg';

const About = () => {
  return (
    <div>
      <div className="flex text-center flex-col px-4 gap-3 py-16 lg:py-24 bg-gray-500/80 text-white">
        <h1 className="text-3xl">About VisionAI</h1>
        <p>Pioneering the future of eye care through artificial intelligence</p>
      </div>
      <div className="bg-white flex justify-center p-4 flex-col md:flex-row lg:p-12 lg:px-32 gap-5">
        <div className="w-[40%] bg-gray-300 rounded-md"></div>
        <div>
          <div className="flex flex-col gap-3 mb-3">
            <h1 className="text-2xl">Our Mission</h1>
            <p>
              At VisionAI, we're committed to revolutionizing eye care through
              cutting-edge artificial intelligence. Our mission is to make early
              detection of eye diseases accessible to everyone, everywhere.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-blue-200/80 w-full p-3 rounded-md">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-medal text-blue-500"></i>
                <h1 className="text-xl">Excellence</h1>
              </div>
              <p>95%+ accuracy rate</p>
            </div>
            <div className="bg-blue-200/80 w-full p-3 rounded-md">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-id-badge text-blue-500"></i>
                <h1 className="text-xl">Impact</h1>
              </div>
              <p>1M+ patients helped</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <div className="bg-blue-200/80 w-full p-3 rounded-md">
              <div className="flex items-center gap-2">
                <i class="fa-solid fa-microchip text-blue-500"></i>
                <h1 className="text-xl">Innovation</h1>
              </div>
              <p>Advanced AI tech</p>
            </div>
            <div className="bg-blue-200/80 w-full p-3 rounded-md">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-blue-500"></i>
                <h1 className="text-xl">Reach</h1>
              </div>
              <p>Global presence</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col text-center py-16 lg:py-28 gap-4">
          <h1 className="text-3xl">Our Leadership Team</h1>
          <p>Meet the experts behind VisionAI's revolutionary technology</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 lg:px-32 pb-32 gap-5 ">
          <div className="p-4  rounded-md shadow-lg ">
            <div>
              <img src={doc1} className="rounded-md mb-2" alt="" />
            </div>
            <div className="px-5 ">
              <h1 className="text-lg">Dr. Sarah Chen</h1>
              <p className="text-sm text-gray-500">Chief Medical Officer</p>
            </div>
          </div>
          <div className="p-4  rounded-md shadow-lg ">
            <div>
            <img src={doc2} className="rounded-md mb-2" alt="" />
            </div>
            <div>
              <h1 className="text-lg">Dr. Michael Roberts</h1>
              <p className="text-sm text-gray-500">AI Research Director</p>
            </div>
          </div>
          <div className="p-4  rounded-md shadow-lg ">
            <div >
            <img src={doc3} className="rounded-md mb-2" alt="" />
            </div>
            <div>
              <h1 className="text-lg">Dr. Emily Thompson</h1>
              <p className="text-sm text-gray-500">Clinical Director</p>
            </div>
          </div>
          <div className="p-4  rounded-md shadow-lg ">
            <div>
            <img src={doc4} className="rounded-md mb-2" alt="" />
            </div>
            <div>
              <h1 className="text-lg">Dr. Sarah Chen</h1>
              < p className="text-sm text-gray-500">Chief Medical Officer</p>
            </div>
          </div>
          <div className="p-4  rounded-md shadow-lg ">
            <div>
            <img src={doc1} className="rounded-md mb-2" alt="" />
            </div>
            <div>
              <h1 className="text-lg">James Wilson</h1>
              <p className="text-sm text-gray-500">Technical Director</p>
            </div>
          </div>
          <div className="p-4  rounded-md shadow-lg ">
            <div>
            <img src={doc2} className="rounded-md mb-2" alt="" />
            </div>
            <div>
              <h1 className="text-lg">Dr. Emily Thompson</h1>
              <p className="text-sm text-gray-500">Clinical Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
