import Link from "next/link";
import React from "react";

type Props = {};

const MissionComponent = (props: Props) => {
  return (
    <div
      id="missions"
      className="missions h-auto grid grid-cols-1 md:grid-cols-2 gap-[5%] max-w-6xl pt-16 mx-auto pb-20"
    >
      <section className="text-section text-start mx-10">
        <h2 className="text-4xl md:text-7xl font-bold mb-10 md:mb-12">
          Missions
        </h2>
        <p className="bg-blue-200 p-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          tenetur tempora adipisci quia provident tempore. Quae quisquam
          nesciunt nisi laboriosam consectetur nemo, voluptas molestiae expedita
          blanditiis saepe architecto. Similique iste quidem repudiandae quae
          eveniet, perferendis et minus mollitia beatae dolorem delectus
          consequuntur nam odio ut quo in voluptatum, accusantium aliquam vel
          neque animi aliquid voluptates? Doloremque reprehenderit nulla ea?
          Quo, placeat. Quod iusto eaque amet, ipsum sequi minus soluta qui.
        </p>
      </section>
      <section className="cta-section">
        <div className="missions-image h-[400px] md:h-full w-full">
          {/* <Image
            src="/licensed-stock-missions.jpeg"
            alt="mission image"
            width={600}
            height={600}
            className="mission-image"
          /> */}
        </div>
      </section>
      <section className="flex px-10 md:px-12 mb-10 CTA md:col-span-2 bg-green-200 items-center py-6 md:py-8 my-5">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          pariatur, animi beatae dolore sint veritatis consectetur praesentium
          error hic nisi.
        </p>
        <Link href="/application/jobs">
          <button className="custom-btn btn-cards">Apply</button>
        </Link>
      </section>
    </div>
  );
};

export default MissionComponent;
