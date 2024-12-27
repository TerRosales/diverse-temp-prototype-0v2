import React, { useState } from "react";
import AboutCard from "./AboutCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "@/styles/sectionStyles/CTA.css";

type Props = {};

const AboutCardsSection = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aboutCards = [
    {
      title: "title 1",
      image: "/licensed-stock-4.jpeg",
      content: "This is a job description for Position 1.",
      linkHref: "/",
      buttonText: "Chupapi",
    },
    {
      title: "title 2",
      image: "/licensed-stock-3.jpeg",
      content: "This is a job description for Position 2.",
      linkHref: "/",
      buttonText: "Apply",
    },
    {
      title: "title 3",
      image: "/licensed-stock-5.jpeg",
      content: "This is a job description for Position 3.",
      linkHref: "/",
      buttonText: "Hire",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === aboutCards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? aboutCards.length - 1 : prev - 1));
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center items-center bg-green-200 h-[40%] py-12 lg:py-16">
        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-5 justify-center lg:gap-10  w-full md:w-[95%]">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>

        {/* Mobile & Tablet View Slider */}
        <div className="flex lg:hidden relative w-full overflow-hidden mx-auto justify-center items-center">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {aboutCards.map((card, index) => (
              <div className="min-w-full flex justify-center" key={index}>
                <AboutCard {...card} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <FaArrowRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 w-full flex justify-center space-x-2">
            {aboutCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center py-6 text-center h-[70vh] md:h-[80vh] ">
        <Image
          src="/image-1.png"
          width={500}
          height={500}
          alt="call to action image"
        />
        <section className="flex flex-col items-center">
          <h3 className="text-4xl md:text-6xl">Looking to Hire?</h3>
          <button className="custom-btn btn-main w-[120px] py-2 m-6">
            Hire With Us
          </button>
        </section>
        <div className="call-to-action h-full w-full absolute opacity-[0.1] mdopacity-[0.2] -z-10" />
      </section>
    </div>
  );
};

export default AboutCardsSection;
