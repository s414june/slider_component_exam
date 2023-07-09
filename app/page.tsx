"use client";

import Image from "next/image";
import SlideCard from "../components/slidecard";
import { useEffect } from "react";

let slideDatas = [
  {
    name: "Gaming RDY SLMBG221",
    type: "prebuilt",
    description: `Windows 11 Home\n
    Intel® Core™ i7-13700F CPU\n
    GeForce RTX 4060 Ti - 8GB\n
    1TB M.2 NVMe SSD\n
    16GB DDR5-5200 RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_1.webp",
  },
  {
    name: "Gaming RDY IWRG209",
    type: "prebuilt",
    description: `Windows 11 Home\n
    AMD Ryzen 7 7700X CPU\n
    GeForce RTX 4070 Ti - 12GB\n
    2TB M.2 NVMe SSD\n
    32GB DDR5-5600MHz RGB RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_2.webp",
  },
  {
    name: "Intel 13th Gen Elite Daily Deal",
    type: "custom",
    description: `Windows 11 Home\n
    Intel® Core™ i7-13700KF CPU\n
    GeForce RTX 3080 - 10GB\n
    1TB Crucial P3 M.2 NVMe SSD\n
    32GB DDR5-6000MHz ADATA RGB RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_3.webp",
  },
  {
    name: "AMD Ryzen 9 Extreme Gaming Daily Deal",
    type: "custom",
    description: `Windows 11 Home\n
    AMD Ryzen™ 9 7950X3D CPU\n
    GeForce RTX 4090 - 24GB\n
    2TB Intel 670p M.2 NVMe SSD\n
    32GB DDR5-5600MHz TEAMGROUP RGB RA`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_4.webp",
  },
  {
    name: "Gaming RDY SLHBG224",
    type: "prebuilt",
    description: `Windows 11 Home\n
    Intel® Core™ i5-13400F CPU\n
    GeForce RTX 3060 - 12GB\n
    1TB M.2 NVMe SSD\n
    16GB DDR5-5200 RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_5.webp",
  },
  {
    name: "Gaming RDY SLMRR214",
    type: "prebuilt",
    description: `Windows 11 Home\n
    AMD Ryzen 5 7600 CPU\n
    AMD Radeon RX 7600 - 8GB\n
    1TB M.2 NVMe SSD\n
    16GB DDR5-5200 RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_6.webp",
  },
  {
    name: "Intel 13th Gen Gaming PC Daily Deal",
    type: "custom",
    description: `Windows 11 Home\n
    Intel® Core™ i5-13600KF CPU\n
    GeForce RTX 3080 - 10GB\n
    1TB Crucial P3 M.2 NVMe SSD\n
    32GB DDR5-6000MHz ADATA RGB RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_7.webp",
  },
  {
    name: "AMD Ryzen Power Up Daily Deal",
    type: "custom",
    description: `Windows 11 Home\n
    AMD Ryzen™ 5 5600 CPU\n
    GeForce RTX 3060 Ti - 8GB\n
    500GB WD SN570 M.2 NVMe SSD\n
    32GB DDR4-3600MHz ADATA RGB RAM`,
    count_sale: 1399,
    count_origin: 1679,
    affirm_mo: 87,
    shipping: "Free Shipping",
    delivery: "Delivery By Tuesday, Jul 11",
    image_src: "/images/pc/pc_8.webp",
  },
];
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
            {slideDatas.map((slideData, i) => (
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
