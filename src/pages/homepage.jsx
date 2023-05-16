import React, { useState, useEffect } from "react";
import { Routes, Link } from "react-router-dom";
import fitness from "./fitness";
import developer from "./developer";
import ugurdeveloperBg from "../assets/ugurdeveloperBg.webp";
import ugurdeveloperBgg from "../assets/developerbgg.webp";
import ugurworkoutBg from "../components/fitnessComponents/fitnessAssets/fitHomeBg.jpeg";

function Homepage() {
  const [text, setText] = useState("developer");
  const options = ["developer", "youtuber", "bodybuilder"];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const newText = options[randomIndex];
      setText(newText);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${ugurworkoutBg})` }}
      className=" bg-blue-600 w-full h-[945px] flex "
    >
      <div className=" mt-[15%] ml-12 p-4 ">
        <h3 className="text-white font-bold text-8xl">
          Merhaba ben <span className="text-blue-700">{text}...</span>
        </h3>
        <h2 className="text-white text-xl">
          Merhaba, Ben Uğur. Bilkent Üniversitesi 3. sınıf CTIS bölümünde okuyan
          bir junior front-end developer ve fitness içerik üreticisiyim.
        </h2>
        <h2 className="text-white text-xl">
          Fitness konusunda içerik oluşturuyor ve bilgilerimi insanlarla
          paylaşıyorum.{" "}
        </h2>
        <h2 className="text-white  text-xl mb-12">
          Daha fazla bilgi için aşşağıdaki butonlara basabilirsiniz.{" "}
        </h2>
        <Link to="/fitness">
          <button className="text-4xl text-blue-700 font-bold mr-12 shadow-md shadow-gray-600 hover:scale-110 duration-500 rounded border-b-4">
            <h1>Fitness Page</h1>
          </button>{" "}
        </Link>
        <Link to="/developer">
          <button className=" text-4xl text-red-700 font-bold shadow-md shadow-black hover:scale-110 duration-500 rounded border-b-4">
            Developer Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
