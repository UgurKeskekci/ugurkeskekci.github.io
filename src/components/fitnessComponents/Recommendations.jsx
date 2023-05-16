import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import RecomCard from "./RecomCard";
import ba1 from "./fitnessAssets/ba1.JPG"

function Recommendations() {

  const card = [
    {
      img: ba1,
      category:'3 AY DEĞİŞİM',
      desc:'Uğur Keşkekçi ',
      title:'TRANSFORMATION',
      details:'82 kilo başlangıç 70 kilogram',
      date:'2018 1 Temmuz > 2023 1 Temmuz' 
    },
    {
      img:'https://cdn.shopier.app/pictures_mid/UKF_f8bc504d5e9891bcc60a24a0939d0706.jpg',
      category:'LITERATURE',
      desc:'After Nature',
      title:'#Logoskop fourteen',
      details:'Poetry and science with Lea Weber and...',
      date:'27 May to 26. November 2023' 
    },
    {
      img:'https://cdn.shopier.app/pictures_mid/UKF_66a84bc575144e5f2690bd5a64f6a3d9.jpg',
      category:'DROP-IN SCIENCE',
      desc:'Meet the Scientest',
      title:'What to do about wealth and inequality',
      details:'Meet the scientist with martyna Linartas',
      date:'2 April to 20. November 2023'  
    },
    {
      img:'https://cdn.shopier.app/pictures_mid/UKF_66a84bc575144e5f2690bd5a64f6a3d9.jpg',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'25 May to 26. November 2023'  
    },
    {
      img:'https://cdn.shopier.app/pictures_mid/UKF_66a84bc575144e5f2690bd5a64f6a3d9.jpg',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'1 April to 26. November 2023' 
    },
    {
      img:'https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'1 April to 26. November 2023' 
    },
    {
      img:'https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'1 Augst to 26. November 2023' 
    },
    
    

  ];



  const scrollLeft = () => {
    document.getElementById("content3").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("content3").scrollLeft += 400;
  };
  return (
    <>
      <div className=" relative bg-black">
        <div className="text-left ml-24 py-4 text-3xl font-bold">
          BEFORE & AFTER
        </div>
        <div className="absolute right-0 top-0">
          <button
            onClick={scrollLeft}
            className="p-4 m-2 rounded-full border-2 border-black"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-4 m-2 rounded-full border-2 border-black mr-24"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content3"
          className="carousel p-4 ml-12 flex justify-start overflow-x-auto scrollbar-hide scroll-smooth relative"
        >
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  title={card[0].title} details={card[0].details} date={card[0].date}/>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Recommendations;