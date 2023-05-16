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




 eski eski home

 <div className='h-full'>
      <div className='w-full m-h-[750px] flex 2xl:h-[750px]'>
        <div >
        <video className='w-[10000px] h-[750px] 2xl:h-[750px] object-cover' src={videoBg} autoPlay loop muted/>
        </div>
          
        
          <p className='absolute w-full h-[600px] 2xl:h-[600px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>BEN YAPTIYSAM</p>
          <p className='absolute w-full h-[760px] 2xl:h-[760px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>SENDE YAPARSIN,</p>
          <p className='absolute w-full h-[930px] 2xl:h-[900px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>HERKES YAPAR</p>
          
          <div className='absolute w-full  flex justify-center items-center text-white animate-bounce bottom-[220px] h-12'> <BsArrowDown size={30}/></div>
          <div className='absolute w-full h-[1100px] 2xl:h-[1100px] flex justify-center items-center '>

          <button className='border border-white w-52 h-16 text-white cursor-pointer'>
            PROJELERİM
          </button>
          </div>
          <div className='absolute md:left-32 left-10 md:h-[1500px] h-[1500px] 2xl:h-[1500px] flex justify-center items-center '>
            <button className='border border-white w-52 h-16 bg-black  text-white text-m rounded-md hover:bg-gray-700'> Fitness Sayfası</button>
            <button className='border border-white w-52 h-16 ml-1 bg-gray-200 hover:bg-gray-400 text-m rounded-md'> Yazılım, Programlama İçerikleri</button>
          </div>
        </div>
   </div>
    
    </>
  );
}

export default Home;
