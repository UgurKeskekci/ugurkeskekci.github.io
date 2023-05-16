import React from "react";
import Card from "./Card.jsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import aylikegitim from "./fitnessAssets/ue1.JPG"


function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 800;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 800;
  };


  const card = [
    {
      img: aylikegitim,
      category:'Kişiye Özel Antrenman ve Beslenme Programı',
      desc:'7/24 Soru cevap',
      title:'PROGRAM',
      details:'bos',
      findoutmore:'Detaylari Gr' 
    },
    {
      img:'https://cdn.shopier.app/pictures_large/UKF_9bfb7e1fe307ff86672da87a5898270e.jpg',
      category:'LITERATURE',
      desc:'After Nature',
      title:'#Logoskop fourteen',
      details:'Poetry and science with Lea Weber and...',
      date:'27 May to 26. November 2023' 
    },
    {
      img:'https://cdn.shopier.app/pictures_mid/UKF_6590f3ef8e140a4534771285faff89a3.jpg',
      category:'DROP-IN SCIENCE',
      desc:'Meet the Scientest',
      title:'What to do about wealth and inequality',
      details:'Meet the scientist with martyna Linartas',
      date:'2 April to 20. November 2023'  
    },
    {
      img:'https://cdn.shopier.app/pictures_mid/UKF_81a18e6b4aa7aed9f375e43f988dd42e.jpg',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'25 May to 26. November 2023'  
    },
    {
      img:'https://pbs.twimg.com/media/EElOrSsXkAUSmwM?format=jpg&name=large',
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


]

  return (
    <>
      <div className=" relative  bg-black ">
        <div className="text-left ml-24 py-4 text-3xl font-bold">
          PROGRAMLAR
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
          id="content"
          className="ml-12 carousel flex  justify-start overflow-x-auto scrollbar-hide scroll-smooth relative"
        >
          
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>
          <div>
            <Card img={card[0].img} category={card[0].category}  description={card[0].desc}  details={card[0].details} findoutmore={card[0].findoutmore}/>
          </div>


          
        </div>
      </div>
    </>
  );
}

export default Carousel;