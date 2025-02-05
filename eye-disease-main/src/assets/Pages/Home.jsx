import React from "react";
import homeImg from '../img/home1.jpeg';
import homeimg1 from '../img/home2.jpeg';

const Home = () => {
  return (
    <div className="lg:px-32 lg:py-12 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <img className="rounded-md shadow-lg hover:scale-95 duration-500 transition-all" src={homeImg} alt="" />
        <img className="rounded-md shadow-lg hover:scale-95 duration-500 transition-all" src={homeimg1} alt="" />
      </div>
      <p className="mt-5 px-2 text-sm lg:text-base lg:px-6">Vision AI - Mobile Eye Disease Detection Tagline: "Scan your eyes
        anywhere, anytime with Vision AI!" Description: "Vision AI uses
        AI-powered mobile technology to detect potential eye diseases like
        cataracts, glaucoma, and macular degeneration. Simply hold your phone
        up, align your eyes with the guides, and snap a photo. Our advanced
        algorithms analyze your eye health, providing instant results and
        recommendations for further care.
      </p>
    </div>
  );
};

export default Home;
