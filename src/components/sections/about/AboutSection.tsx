import React from "react";
import AboutBanner from "./AboutBanner";
import AboutCardsSection from "./AboutCardsSection";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="mb-4">
      <AboutBanner />
      <AboutCardsSection />
    </section>
  );
};

export default AboutSection;
