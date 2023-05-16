import React from "react";
import bgPhoto from "./fitnessAssets/fitBg.jpeg";

function AboutFitness() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-cover bg-center text-gray-300 "
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
            1 Temmuz 2018'de üniversite sınavını kazandıktan sonra spor yapmaya başladım ve bu kararımın sonucunda çevremden olumlu geri dönüşler almaya başladım. İnsanlar, hangi programı kullandığımı veya hangi diyeti takip ettiğimi sürekli olarak sormaya başladılar. Bu ilgi beni düşündürdü ve bilgilerimi başkalarıyla paylaşmanın bir yolu olarak YouTube kanalı açmaya karar verdim.
            </p>
            <p className="mt-5">
            Kanalımda, nasıl kilo verdiğimi ve hangi antrenmanları yaptığımı anlatan videolar çekmeye başladım. Bu videoları, bilimsel araştırmalar ve kişisel deneyimlerimle destekleyerek insanlara sunmaya çalıştım. 2018 yılından bu yana, spor yapmaya, araştırmalara ve kendimi geliştirmeye devam ettim. YouTube kanalım başlangıçta spor üzerine odaklansa da, zamanla Amerika, Work and Travel, yazılım ve seyahatle ilgili içeriklere de yer verdim.
            </p>
            <p className="mt-5">
            Gelecekte, doğal olarak yarışmalara katılmak da planlarım arasında bulunuyor. Bu süre zarfında edindiğim deneyimleri ve başarılarımı paylaşmak için, YouTube kanalım aracılığıyla insanlara ilham vermeye devam etmeyi umuyorum.
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

export default AboutFitness;
