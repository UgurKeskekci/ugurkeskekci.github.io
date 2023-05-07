import React from 'react'
import videoBg from '../assets/VideoBg.mp4'
import {BsArrowDown} from 'react-icons/bs'


function Home() {
  return (
    
    
    <>
    
    <div className='h-full'>
      <div className='w-full h-[750px] flex 2xl:h-[750px]'>
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
