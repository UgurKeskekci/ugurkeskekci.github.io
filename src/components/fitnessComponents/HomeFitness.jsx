import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import fitHomeBg from "./fitnessAssets/fitHomeBg.jpeg"

function HomeFitness() {
  return (
   
    <div name="home" className="w=full h-screen bg-[#0a192f] bg-cover" style={{ backgroundImage: `url(${fitHomeBg})` }}>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
       
        <p className="text-red-800 text-2xl">Merhaba ben</p>
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-400">
          Uğur Keşkekçi{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
          BEN YAPTIYSAM 

        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
          SEN DE YAPARSIN
          
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
          HERKES YAPAR
        </h2>
        <p className="text-gray-600 py-4 max-w-[700px]">
         
        </p>
        <div>
          <button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          Ben Kimim?
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default HomeFitness