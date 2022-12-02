import React from "react";
import new1 from "../../../assets/img/nouvaute/new1.webp";
import "./Nouvaute.css";

function Nouveaute() {
  return (
    <>
      <div className="bg-black md:grid md:grid-cols-2 py-32 md:py-0 md:gap-0 ">
        <div className="text-white text-center item2 flex ">
          <div className="item2">
            <div>
              <h1 className="font-normal md:text-[60px] md:pt-[0px] text-[40px]">
                NOUVEAUTÉS
              </h1>
              <p className="font-serif text-[25px] hover:opacity-40 hover:cursor-pointer hover:duration-300 hover:ease-in">
                DÉCOUVRIR
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={new1} alt="camping" className="w-full saturate-100 hidden md:flex" />
        </div>
      </div>
      <div className=" new3 new2 text-white flex py-32 md:py-0 ">
        <div className="h-[400px] md:h-[600px] flex new3 text-left">
          <div className="">
            <h1 className="md:text-[60px] font-medium text-[40px] ">DORMIR À LA BELLE ÉTOILE</h1>
            <p className="py-8 text-zinc-50  font-light text-[20px] ">Vente spéciale avec -15 % sur toutes les tentes</p>
            <button className="text-black text-[15px] bg-white px-[30px] py-[15px] hover:text-white hover:bg-black hover:border-white hover:border-2">Acheter</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nouveaute;
