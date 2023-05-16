import React from 'react'
import videoBg from '../assets/VideoBg.mp4'
import {BsArrowDown} from 'react-icons/bs'
import bgPhoto from "../assets/bgPhoto.png";


function Home() {
  return (
    
    
    <>
    
    <div name="home" className="h-full font-roboto max-h-[650px]">
        <div className="w-full h-[650px] flex">
          <div>
            <video
              className="w-[10000px] h-[650px] object-cover"
              src={videoBg}
              autoPlay
              loop
              muted
            />
          </div>

          <p className=" mt-20 ml-[10%] absolute w-full h-[430px] flex justify-left items-center md:text-6xl  text-4xl text-white font-bold">
            UĞUR KEŞKEKÇİ
          </p>
          <p className=" mt-20 ml-[10%] absolute w-full h-[550px] flex justify-left items-center md:text-3xl  text-4xl text-white">
           Junior  Developer
          </p>
          <p className="mt-20 ml-[10%] absolute w-full h-[625px] flex justify-left items-center md:text-xl  text-4xl text-white">
           Hoşgeldiniz...
          </p>
          
        </div>
      </div>
   

    
    </>
  );
}

export default Home;
