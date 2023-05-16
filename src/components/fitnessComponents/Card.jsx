import React from "react";

function Card({ img, category, content, description, details, findoutmore }) {
  return (
    <>
      <div className="shadow-md my-3 relative ml-6 min-w-[350px]  font-roboto  shadow-black hover:scale-110 duration-500">
        <img
          src={img}
          className="object-cover h-[550px] w-[350px] "
        />

        <div className="absolute bottom-32 left-12 right-12 px-4 py-2 text-center text-xl font-bold " >
          <h3 className="text-white ">{category}</h3>
          <p className="mt-2  text-white font-bold">{content}</p>
        </div>
        <div className=" absolute justify-center left-12  right-12 bottom-8 text-white  text-xl font-bold ">
          <div className="text-center mr-3 border-r pr-3">

            <h1>{description}</h1>

            <h1>{details}</h1>
            <h1>{findoutmore}</h1>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
