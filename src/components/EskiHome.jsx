import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import videoBg from '../assets/videoBackground.mp4'

function Home() {
  return (
    
    
    <>
    
    <div name="home" className="w=full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
       
        <p className="text-red-800 text-2xl">Merhaba ben</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
          Uğur Keşkekçi{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
          ALOPROTEIN.COM UGUR10 KULLANMAYA UNUTMAYALIM REİSLER{" "}
        </h2>
        <p className="text-gray-600 py-4 max-w-[700px]">
          bir Buralar değerlenecek
        </p>
        <div>
          <button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Yaptığım işler
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
         
        </div>
      </div>
    </div>

    
    </>
  );
}

export default Home;
