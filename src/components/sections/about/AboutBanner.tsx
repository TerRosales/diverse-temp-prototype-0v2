import React from "react";

type Props = {};

const AboutBanner = (props: Props) => {
  return (
    <section className=" flex flex-col sm:flex-row w-full bg-gray-100 min-h-[20%] mt-4">
      <div className="w-full sm:w-[60%] flex flex-col items-center justify-center bg-blue-500 text-white">
        <hr className="divider" />
        <h1 className="text-4xl sm:text-5xl font-bold m-5 text-center lg:text-left">
          On Your Way to Success
        </h1>
        <hr className="divider" />
      </div>

      <div className="sm:flex w-full sm:w-[40%] items-center justify-center bg-gray-300">
        <div className="hero-image-2 lg:col-span-1" />
      </div>
    </section>
  );
};

export default AboutBanner;
