import Earings from "../components/banners/Earings";
import Help from "../components/banners/Help";

import HomeBannerSlider from "../components/sliders/HomeBannerSlider";
import InstagramPosts from "../components/sliders/InstagramPosts";
import OurWorkYellow from "../components/cards/WhatWeDoCard/OurWorkYellow";

function Home() {
  return (
    <div className="w-full">
      <div className="w-full mb-5">
        <HomeBannerSlider />
      </div>
      <OurWorkYellow />
      <Earings />
      <section className="md:w-[80%] mx-auto my-10 ">
        <h3 className="text-sm text-LetterColor pl-3 ">
          Nuestras redes sociales
        </h3>
        <h1 className="text-xl md:text-3xl text-LetterColor font-poppinsSemiBold mb-5 text-start pl-3">
          Acompaña nuestras{" "}
          <span className="text-primaryColor font-poppinsBold">
            actividades
          </span>
        </h1>
        <div className="w-[90%] md:w-full mx-auto">
          <InstagramPosts />
        </div>
      </section>
      <Help />
    </div>
  );
}

export default Home;
