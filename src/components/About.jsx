import React from "react";
import bgPhoto from "../assets/bgPhoto.png";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-cover bg-center text-gray-300"
      style={{ backgroundImage: `url(${bgPhoto})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Hakkımda
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Merhaba, ben Uğur Keşkekçi. Front-end developer ve fitness içerik
              üreticisiyim.
            </p>
          </div>

          <div>
            <p className="mt-2">
              Şu anda Bilkent Üniversitesi CTIS bölümünde 3. sınıf öğrencisiyim.
              Front-end developer olarak part-time çalışmaktayım ve 2018
              yılından beri sosyal medyada fitness içerikleri üretiyorum.
              Ayrıca, 2022 yılında Work and Travel programı kapsamında
              Amerika'nın Utah eyaletine gittim ve 4 ay boyunca çalıştım. Bu
              deneyimimle birlikte farklı kültürleri tanıma ve gelişimim için
              önemli bir adım attım.
            </p>
            <p className="mt-5">
              Profesyonel kariyerimde, front-end geliştirme alanında kendimi
              sürekli geliştirmek için çaba harcıyorum. Teknolojinin hızla
              geliştiği bir dünyada, kendimi güncel tutmak ve yeni teknolojileri
              takip etmek benim için önemlidir.
            </p>
            <p className="mt-5">
              Fitness alanında da tutkuyla ilgileniyorum. Fitness içerikleri
              üretmek, insanlara sağlıklı yaşam tarzı hakkında bilgi vermek ve
              onları motive etmek benim için keyifli bir uğraş.
            </p>

            <p className="mt-5">
              Bana ait diğer bilgilere web sayfam üzerinden ulaşabilirsiniz.
              Teşekkür ederim.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
