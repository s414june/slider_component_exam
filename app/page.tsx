"use client";

import Image from "next/image";
import SlideCard from "../components/slidecard";
import { useEffect } from "react";
import getSliderDatas from '../mock/sliderDatas'

let sliderDatas = getSliderDatas();

export default function Home({ Component, pageProps }) {
  useEffect(() => {
    let cardOutside = document.querySelector(".card-outside");
    let cards = cardOutside.querySelectorAll(".card");
    let arrowLeft = document.querySelector(".arrow-left");
    let arrowRight = document.querySelector(".arrow-right");
    setArrowStatus();
    setMobileVh();
    cardOutside.addEventListener("scrollend", () => {
      setArrowStatus();
    });
    window.addEventListener("resize", function () {
      setMobileVh;
    });
    function setArrowStatus() {
      let cardOutsideLeft = cardOutside.scrollLeft;
      arrowLeft.disabled = cardOutside.scrollLeft > 0 ? false : true;
      let lastScrollLeft = 0 - cardOutside.clientWidth;
      cards.forEach((card) => {
        lastScrollLeft += card.clientWidth;
      });
      cardOutsideLeft = Math.round(cardOutsideLeft / 10) * 10; //四捨五入到二位數
      arrowRight.disabled = cardOutsideLeft < lastScrollLeft ? false : true;
    }
    function setMobileVh() {
      let windowsVH = Math.floor(window.innerHeight * 0.01);
      document.documentElement.style.setProperty("--vh", windowsVH + "px");
    }
  }, []);
  function scrollCard(addCardCount) {
    let cardOutside = document.querySelector(".card-outside");
    let cards = cardOutside.querySelectorAll(".card");
    cardOutside.scrollLeft += cardOutside.clientWidth * addCardCount;
  }
  return (
    <main className="min-h-screen">
      <section className="pt-5">
        <div className="relative flex flex-col place-items-center">
          <h1 className="text-3xl font-bold font-gotham-sans">
            Best Seller Gaming PC
          </h1>
          <h2 className="text-xl font-bold font-gotham-sans">
            Prebuilt & Custom
          </h2>
        </div>
      </section>
      <section className="w-full px-5">
        <div className="justify-end hidden sm:flex">
          <button
            type="button"
            onClick={() => scrollCard(-1)}
            className="arrow arrow-left w-9 h-9 shadow-lg bg-white flex justify-center items-center rounded disabled:invert-0 hover:filter hover:invert transition ease-in-out"
          >
            <img
              className="w-5 h-5 origin-center -rotate-90"
              src={process.env.BASE_PATH + "/images/arrow.svg"}
              alt="arrow-left"
            />
          </button>
          <button
            type="button"
            onClick={() => scrollCard(1)}
            className="arrow arrow-right w-9 h-9 shadow-lg bg-white flex justify-center items-center rounded ml-2 disabled:invert-0 hover:filter hover:invert transition ease-in-out"
          >
            <img
              className="w-5 h-5 origin-center rotate-90"
              src={process.env.BASE_PATH + "/images/arrow.svg"}
              alt="arrow-right"
            />
          </button>
        </div>
        <div className="w-full relative">
          <div className="overflow-x-auto card-outside whitespace-nowrap relative">
            {sliderDatas.map((slideData, i) => (
              <SlideCard
                data={slideData}
                key={i}
              ></SlideCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
