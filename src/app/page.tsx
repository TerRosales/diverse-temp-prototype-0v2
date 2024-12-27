"use client";
import AboutSection from "@/components/sections/about/AboutSection";
import HeroSection from "@/components/sections/hero/HeroSection";

export default function Home() {
  return (
    <div className="h-auto pt-10 md:pt-0 flex flex-col">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
