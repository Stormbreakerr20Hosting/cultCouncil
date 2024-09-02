"use client";
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Image from "next/image";

const images = [
  "/assets/images/artgeeks.png",
  "/assets/images/pmc.jpg",
  "/assets/images/designauts.jpeg",
  "/assets/images/gusthak.jpg",
  "/assets/images/spic.jpg",
  "/assets/images/artgeeks.png",
  "/assets/images/music.jpg",
  "/assets/images/patanni.jpg",
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const getTransformValue = (index: number) => {
    let diff = (index - activeIndex + totalImages) % totalImages;
    if (diff > totalImages - 5) {
      diff -= totalImages;
    }
    // Adjust the translate value based on screen width
    let translateValue = 0;
    if (screenWidth >= 1200) {
      translateValue = diff * 500;
    } else if (screenWidth >= 900) {
      translateValue = diff * 450;
    } else if (screenWidth >= 765) {
      translateValue = diff * 400;
    } else translateValue = diff * 300;
    return `translateX(${translateValue}px) scale(${
      index === activeIndex ? 1.5 : 0.8
    })`;
  };

  const getVisibility = (index: number) => {
    const diff = (index - activeIndex + totalImages) % totalImages;

    if (diff === totalImages - 5) return "hidden";
    if (diff === totalImages - 4) return "hidden";
    return "visible";
  };

  return (
    <div className="carousel h-screen w-full relative">
      <div className="absolute top-28 left-12 text-neutral-100 sm:w-[500px] max-sm:left-12 max-sm:top-28 max-sm:w-[300px] ">
        <h1 className="text-4xl sm:text-5xl font-semibold pb-2">Music Club</h1>
        <p className="text-sm sm:text-base">
          This is just random text that you don’t need to read but is there just
          for show because the designer liked putting random paragraphs
          everywhere that make no sense at all. Hope you enjoy the show.
        </p>
        <div className="flex my-2 gap-2.5 sm:gap-5 text-neutral-100/[0.5]">
          <FaRegArrowAltCircleLeft
            size={30}
            onClick={handlePrev}
            className="cursor-pointer max-sm:scale-90"
          />
          <FaRegArrowAltCircleRight
            size={30}
            onClick={handleNext}
            className="cursor-pointer max-sm:scale-90"
          />
        </div>
      </div>
      <div className="carousel-images max-sm:mt-5 -rotate-[15deg] translate-y-24">
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-image cursor-pointer max-lg:mt-28"
            style={{
              transform: getTransformValue(index),
              visibility: getVisibility(index),
            }}
          >
            <Image
              width={100}
              height={100}
              src={image}
              onClick={() => setActiveIndex(index)}
              alt={`Carousel ${index}`}
              className={`m-2 xl:h-60 xl:w-60 md:h-56 md:w-56 sm:h-44 sm:w-44 shadow-2xl lg:h-64 lg:w-64 xs:h-44 xs:w-44 h-56 w-56`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
