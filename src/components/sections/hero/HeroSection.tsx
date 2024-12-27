"use client";
import React from "react";
import HeroContent from "./HeroContent";
import "@/styles/sectionStyles/hero.css";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="bg-pink-100 mt-10 flex flex-col lg:grid lg:grid-cols-2 lg:gap-2 justify-evenly items-center min-h-[60%]">
      {/* <div className="absolute w-[70%] h-[72%] bg-pink-200" /> */}
      <div className="hero-image lg:col-span-1" />
      <section>
        <HeroContent />
      </section>
    </section>
  );
};

export default HeroSection;
