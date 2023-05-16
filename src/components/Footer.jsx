import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div>
        <ul className="flex  px-8 justify-center">
          
          <li className="px-36 p-16 text-center">
            <div className="px-24">
              <GoLocation size={30} />
            </div>
            <p className="text-xl ">Konum</p>
            <p className="underline ">Ankara, </p>
          </li>
          <li className="px-36 p-16 text-center">
            <div className="px-24">
              <FaRegComment size={30} />
            </div>
            <p className="text-xl ">İletişim</p>
            <p className="underline "> ugur.keskekci@hotmail.com </p>
          </li>
        </ul>
      </div>
      <div className="bg-gray-200 ">
        <div className="row flex-row text-center ">
          <div>
            <ul className="flex justify-center ">
              <li className="p-4">Hakkımda</li>
              <li className="p-4">Neden</li>
              <li className="p-4">Blog</li>
             
            </ul>
          </div>
          <div>
            <ul className="flex justify-center mt-4">
              <li className="p-6">
                <BsInstagram size={30} />
              </li>
              <li className="p-6">
                <BsYoutube size={30} />
              </li>
              <li className="p-6">
                <BsFacebook size={30} />
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <div>
              <ul className="flex justify-center  mt-11">
                <li className="p-4 ">Legal Notice</li>
                <li className="p-4">Gizlilik Politikası</li>
                <li className="p-4">KVKK Aydınlatma Metni</li>
                <li className="p-4">Mesafeli Satış Sözleşmesi</li>
                <li className="p-4">Koşullar</li>
                <li className="p-4">Cookie Ayarları</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;