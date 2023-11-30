import Image from "next/image";
import React from "react";

interface ICard {
  title: string;
  label: string;
  img: string;
}

export const Card = ({ title, label, img }: ICard) => {
  return (
    <div className="w-[327px] h-[240px] p-5 md:p-0 md:w-[292px] md:h-[340px] bg-greenLight rounded-2xl border border-cyan-950 flex-col justify-start items-start  inline-flex">
      <div className="md:py-7 md:px-6">
        <div className="self-stretch card-mobile-title md:card-normal-title mb-1 md:mb-0">
          {title}
        </div>
        <div className="self-stretch card-mobile-label md:card-normal-label ">
          {label}
        </div>
      </div>
      <div className="w-full flex justify-end overflow-hidden">
        <div>
          <Image
            alt="Illustration 1"
            src={img}
            quality={100}
            style={{
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
