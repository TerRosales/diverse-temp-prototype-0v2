import React from "react";
import Link from "next/link";

type AboutCardProps = {
  title: string;
  image: string; // Background image URL
  content: string;
  linkHref: string;
  buttonText?: string; // Optional button text, defaults to "Apply"
};

const AboutCard = ({
  title,
  image,
  content,
  linkHref,
  buttonText = "Apply",
}: AboutCardProps) => {
  return (
    <div className="card hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 my-6 md:my-20">
      {/* Image area with dynamic background */}
      <div
        className="image shadow-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content area */}
      <div className="content shadow-lg">
        <span className="title">
          <h3 className="card-title text-base md:text-lg font-bold">{title}</h3>
        </span>
        <div className="items-center">
          <p className="text-neutral-900 p-4">{content}</p>
          <div className="text-white text-sm flex gap-6 justify-end mr-6">
            <Link href={linkHref}>
              <button className="custom-btn btn-cards">{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
