import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="py-32 md:py-0 flex md:px-[10px] lg:px-[60px] px-[20px] hero md:pt-[0px] pt-20 md:h-[800px] md:w-full h-[600px] w-full">
      <div className="md:grid md:grid-cols-2 md:gap-[300px] mt-[90px] px-[20px] hero_item">
        <div className="text-zinc-50">
          <h1 className="md:text-[90px] font-bold text-[40px] ">
            FUSION AVEC LA NATURE
          </h1>
          <p className="text-zinc-50 pt-8 font-light text-[20px] ">
            Tout ce dont vous avez besoin pour une expérience de voyage parfaite
          </p>
          <div className="pt-8">
            <button className="text-black text-[15px] mb-32 md:mb-0 bg-white px-[30px] py-[15px] hover:text-white hover:bg-black hover:border-white hover:border-2">
              Voir notre gamme
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
