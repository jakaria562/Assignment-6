import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import bannerImg from "../src/assets/banner.png"

const Banner = () => {
    return (
        <div>
         <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-200  border border-purple-500/30  text-sm font-medium px-5 py-2 rounded-full">
           <span className='bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent'> New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black">
               Supercharge Your<br>
               </br>
               Digital Workflow
            
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className=" bg-gradient-to-r from-purple-600 to-fuchsia-500  transition-all px-8 py-4 rounded-4xl font-semibold text-lg shadow-xl shadow-purple-500/30 flex items-center gap-3 group text-white">
              Explore Products
             
            </button>
            <button className='transition-all px-8 py-4  bg-purple-200  border border-purple-500/30   rounded-4xl font-semibold text-lg shadow-xl shadow-purple-500/30 flex items-center gap-3 group'>
                  <CiPlay1/> <span className='bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent'> Watch Demo</span>
            </button>
          </div>

         
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={bannerImg }
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;